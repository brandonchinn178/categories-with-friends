{-# LANGUAGE DataKinds #-}
{-# LANGUAGE LambdaCase #-}
{-# LANGUAGE NamedFieldPuns #-}
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE TypeApplications #-}
{-# LANGUAGE TypeOperators #-}

import Control.Concurrent.MVar (MVar, modifyMVar, modifyMVar_, newMVar)
import Control.Exception (fromException, try)
import Control.Monad (forM_)
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
    , ServerError(..)
    , createGame
    , getHost
    , getPlayers
    , getStatus
    , initPlayer
    , mkError
    , mkMessage
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
  platformGameVar <- loadGame gameId (createGame playerName)
  liftIO $ modifyMVar_ platformGameVar $ setupPlayer playerName playerConn

  liftIO $ withPingThread playerConn pingDelay postPing $ runLoop $ do
    event <- receiveJSONData playerConn
    liftIO $ modifyMVar platformGameVar $ \PlatformGame{game, playerConns} ->
      case event of
        StartRoundEvent{} -> undefined
        SubmitAnswersEvent{} -> undefined
        EndValidationEvent{} -> undefined
        EndGameEvent{} -> undefined
  where
    pingDelay = 30 -- seconds
    postPing = return ()

    -- continually run the given action, until a CloseRequest exception is thrown
    -- any other errors are sent to the client
    runLoop m = try m >>= \case
      Left e ->
        case fromException e of
          Just CloseRequest{} -> return ()
          _ -> do
            let serverErr = fromMaybe (UnexpectedServerError e) (fromException e)
            sendJSONData playerConn $ mkError serverErr
            runLoop m
      Right _ -> runLoop m

{- Game mechanics -}

-- | If the game hasn't started yet, add the given player to the game and notify everyone of the
-- new arrival.
setupPlayer :: PlayerName -> Connection -> PlatformGame -> IO PlatformGame
setupPlayer playerName playerConn platformGame =
  case getStatus $ game platformGame of
    GameStart -> notifyUpdatedPlayerList >> pure updatedPlatformGame
    _ -> pure platformGame
  where
    updatedGame = initPlayer playerName (game platformGame)
    updatedPlatformGame = platformGame
      { game = updatedGame
      , playerConns = Map.insert playerName playerConn (playerConns platformGame)
      }
    notifyUpdatedPlayerList = sendToAll updatedPlatformGame $
      RefreshPlayerListMessage (getHost updatedGame) (Set.toList $ getPlayers updatedGame)

{- WebSocket helpers -}

receiveJSONData :: FromJSON a => Connection -> IO a
receiveJSONData conn = either fail return . eitherDecode' =<< receiveData conn

sendJSONData :: ToJSON a => Connection -> a -> IO ()
sendJSONData conn = sendTextData conn . encode

sendToAll :: PlatformGame -> Message -> IO ()
sendToAll PlatformGame{playerConns} message =
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
type Platform = Map Text (MVar PlatformGame)

data PlatformGame = PlatformGame
  { game        :: Game
  , playerConns :: Map PlayerName Connection
  }

-- | Loads the game with the given ID. If no game is found, create the given game.
loadGame :: Text -> Game -> Handler (MVar PlatformGame)
loadGame gameId newGame = do
  platformVar <- asks envPlatform

  liftIO $ modifyMVar platformVar $ \platform ->
    case Map.lookup gameId platform of
      Nothing -> do
        platformGameVar <- newMVar $ PlatformGame newGame Map.empty
        return (Map.insert gameId platformGameVar platform, platformGameVar)
      Just platformGameVar -> return (platform, platformGameVar)
