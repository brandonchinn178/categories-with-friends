{-# LANGUAGE DataKinds #-}
{-# LANGUAGE LambdaCase #-}
{-# LANGUAGE NamedFieldPuns #-}
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE TypeApplications #-}
{-# LANGUAGE TypeOperators #-}

import Control.Concurrent.MVar (MVar, modifyMVar, modifyMVar_, newMVar)
import Control.Exception (fromException, throwIO, try)
import Control.Monad (forM_, unless, when)
import Control.Monad.IO.Class (liftIO)
import Control.Monad.Reader (ReaderT, asks, runReaderT)
import Data.Aeson (FromJSON, ToJSON, eitherDecode', encode)
import Data.Map.Strict (Map)
import qualified Data.Map.Strict as Map
import Data.Maybe (fromMaybe)
import qualified Data.Set as Set
import Data.Text (Text)
import Network.Wai.Handler.Warp (run)
import Network.WebSockets
    ( Connection
    , ConnectionException(..)
    , receiveData
    , sendTextData
    , withPingThread
    )
import Servant hiding (Handler, Server)
import qualified Servant
import Servant.API.WebSocket (WebSocket)

import Scattergories
    ( Event(..)
    , Game
    , GameStatus(..)
    , Message(..)
    , PlayerName
    , RoundInfo(..)
    , RoundStatus(..)
    , ServerError(..)
    , createGame
    , generateRound
    , getHost
    , getPlayers
    , getStatus
    , initPlayer
    , markGameDone
    , mkError
    , mkMessage
    , startRound
    )

type API =
       Capture "gameId" Text :> Capture "playerId" PlayerName :> WebSocket
  :<|> "static" :> Raw
  :<|> Raw

main :: IO ()
main = do
  platformVar <- newMVar Map.empty

  run 8000 $ app HandlerEnv
    { envPlatform = platformVar
    }

app :: HandlerEnv -> Application
app env = serve apiProxy $ hoistServer apiProxy (`runReaderT` env) server
  where
    apiProxy = Proxy @API

server :: Server API
server =
       serveGame
  :<|> serveStatic
  :<|> serveHTML

{- Route definitions -}

-- | The location of static files
distDir :: FilePath
distDir = "./public/"

-- | Serve static files
serveStatic :: Server Raw
serveStatic = serveDirectoryFileServer distDir

-- | Serve index.html
serveHTML :: Server Raw
serveHTML = serveDirectoryWebApp distDir

serveGame :: Text -> PlayerName -> Connection -> Handler ()
serveGame gameId playerName playerConn = do
  activeGameVar <- loadGame gameId (createGame playerName)
  liftIO $ modifyMVar_ activeGameVar $ setupPlayer playerName playerConn

  liftIO $ withPingThread playerConn pingDelay postPing $ runLoop activeGameVar $ do
    event <- receiveJSONData playerConn
    modifyMVar_ activeGameVar $ \activeGame -> do
      let checkHost = unless (getHost (game activeGame) == playerName) $ throwIO NotHostError
      case event of
        StartRoundEvent -> checkHost >> startGameRound activeGame
        SubmitAnswersEvent{} -> undefined
        EndValidationEvent{} -> undefined
        EndGameEvent -> checkHost >> endGame activeGame
  where
    pingDelay = 30 -- seconds
    postPing = return ()

    -- continually run the given action, until a CloseRequest exception is thrown
    -- any other errors are sent to the client
    runLoop activeGameVar m = try m >>= \case
      Left e ->
        case fromException e of
          Just CloseRequest{} ->
            modifyMVar_ activeGameVar $ \activeGame ->
              pure activeGame
                { playerConns = Map.delete playerName (playerConns activeGame)
                }
          _ -> do
            let serverErr = fromMaybe (UnexpectedServerError e) (fromException e)
            sendJSONData playerConn $ mkError serverErr
            runLoop activeGameVar m
      Right _ -> runLoop activeGameVar m

{- Game mechanics -}

-- | If the game hasn't started yet, add the given player to the game and notify everyone of the
-- new arrival.
setupPlayer :: PlayerName -> Connection -> ActiveGame -> IO ActiveGame
setupPlayer playerName playerConn activeGame = do
  when (playerName `Map.member` playerConns activeGame) $
    throwIO $ CannotJoinGameError "you're already in the game"

  case getStatus $ game activeGame of
    GameStart -> notifyUpdatedPlayerList >> pure updatedActiveGame
    _ -> if playerName `Set.member` getPlayers (game activeGame)
      then pure activeGame
      else throwIO $ CannotJoinGameError "game already started without you"
  where
    updatedGame = initPlayer playerName (game activeGame)
    updatedActiveGame = activeGame
      { game = updatedGame
      , playerConns = Map.insert playerName playerConn (playerConns activeGame)
      }
    notifyUpdatedPlayerList = sendToAll updatedActiveGame $
      RefreshPlayerListMessage (getHost updatedGame) (Set.toList $ getPlayers updatedGame)

-- | Start a new round in the game.
startGameRound :: ActiveGame -> IO ActiveGame
startGameRound activeGame@ActiveGame{game} = do
  nextRoundNum <- case getStatus game of
    GameStart -> return 0
    GameRound RoundInfo{roundNum} RoundEnd -> return $ roundNum + 1
    GameRound _ _ -> throwIO $ UnexpectedStartRoundError "round isn't over"
    GameDone -> throwIO $ UnexpectedStartRoundError "game is done"

  newRound <- generateRound nextRoundNum
  let activeGame' = activeGame { game = startRound newRound game }

  sendToAll activeGame' $ StartRoundMessage newRound
  return activeGame'

-- | End the game.
endGame :: ActiveGame -> IO ActiveGame
endGame activeGame@ActiveGame{game} = do
  let activeGame' = activeGame { game = markGameDone game }
  sendToAll activeGame' EndGameMessage
  return activeGame'

{- WebSocket helpers -}

receiveJSONData :: FromJSON a => Connection -> IO a
receiveJSONData conn = either fail return . eitherDecode' =<< receiveData conn

sendJSONData :: ToJSON a => Connection -> a -> IO ()
sendJSONData conn = sendTextData conn . encode

sendToAll :: ActiveGame -> Message -> IO ()
sendToAll ActiveGame{playerConns} message =
  forM_ (Map.elems playerConns) $ \conn ->
    sendJSONData conn $ mkMessage message

{- Servant monad -}

{-# ANN HandlerEnv ("Hlint: ignore Use newtype instead of data" :: String) #-}
data HandlerEnv = HandlerEnv
  { envPlatform :: MVar Platform
  }

type Handler = ReaderT HandlerEnv Servant.Handler
type Server api = Servant.ServerT api Handler

-- | The state of the platform, mapping game identifiers to Game.
type Platform = Map Text (MVar ActiveGame)

data ActiveGame = ActiveGame
  { game        :: Game
  , playerConns :: Map PlayerName Connection
  }

-- | Loads the game with the given ID. If no game is found, create the given game.
loadGame :: Text -> Game -> Handler (MVar ActiveGame)
loadGame gameId newGame = do
  platformVar <- asks envPlatform

  liftIO $ modifyMVar platformVar $ \platform ->
    case Map.lookup gameId platform of
      Nothing -> do
        activeGameVar <- newMVar $ ActiveGame newGame Map.empty
        return (Map.insert gameId activeGameVar platform, activeGameVar)
      Just activeGameVar -> return (platform, activeGameVar)
