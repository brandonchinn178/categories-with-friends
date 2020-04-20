{-# LANGUAGE DataKinds #-}
{-# LANGUAGE TypeApplications #-}
{-# LANGUAGE TypeOperators #-}

import Control.Concurrent (forkIO, threadDelay, throwTo)
import Control.Concurrent.MVar
    (MVar, modifyMVar, modifyMVar_, newMVar, readMVar)
import Control.Monad (forM_, forever, void, (>=>))
import Control.Monad.IO.Class (liftIO)
import Data.Char (toUpper)
import qualified Data.Map.Strict as Map
import Data.Text (Text)
import qualified Data.Text as Text
import Network.Wai.Handler.Warp (run)
import Network.WebSockets (Connection, ConnectionException(ConnectionClosed))
import Servant
import Servant.API.WebSocket (WebSocket)
import System.Environment (lookupEnv)

import CategoriesWithFriends
    (ActiveGame(..), hasTimedOut, initGameWithHost, servePlayer)
import CategoriesWithFriends.Game.Player (PlayerName)
import CategoriesWithFriends.Logging (debugT)

import AdminAPI (AdminAPI, AdminContext, initAdminContext, serverAdminAPI)
import Platform (Platform)
import StaticAPI (StaticAPI, serverStaticAPI)

type API =
       "game" :> Capture "gameId" Text :> Capture "playerId" PlayerName :> WebSocket
  :<|> AdminAPI
  :<|> StaticAPI

main :: IO ()
main = do
  platformVar <- newMVar Map.empty
  port <- maybe 8000 read <$> lookupEnv "PORT"
  adminCtx <- initAdminContext

  -- every 5 minutes, check for games to terminate
  schedule 300 $ modifyMVar_ platformVar $ \platform -> do
    let isExpired = readMVar >=> hasTimedOut
    (expiredGames, runningGames) <- partitionM (isExpired . snd) $ Map.toList platform

    forM_ expiredGames $ \(gameId, activeGameVar) -> do
      activeGame <- readMVar activeGameVar
      forM_ (Map.elems $ activePlayers activeGame) $ \(_, threadId) ->
        throwTo threadId ConnectionClosed
      debugT $ "Game " ++ show gameId ++ " killed"

    return $ Map.fromList runningGames

  putStrLn $ "Running on port " ++ show port
  run port $ app platformVar adminCtx
  where
    schedule delay m = void $ forkIO $ forever $ m >> threadDelay delay

app :: MVar Platform -> AdminContext -> Application
app platformVar adminCtx = serveWithContext (Proxy @API) ctx $ serverAPI platformVar
  where
    ctx = adminCtx :. EmptyContext

serverAPI :: MVar Platform -> Server API
serverAPI platformVar =
       serveGame platformVar
  :<|> serverAdminAPI platformVar
  :<|> serverStaticAPI

{- Serve websocket game -}

serveGame :: MVar Platform -> Text -> PlayerName -> Connection -> Handler ()
serveGame platformVar gameId' playerName playerConn = liftIO $ do
  debugT $ "Got connection from " ++ show playerName ++ " (game: " ++ show gameId ++ ")"
  activeGameVar <- loadOrCreateGame platformVar gameId playerName
  servePlayer activeGameVar playerName playerConn (cleanupGame platformVar gameId)
  where
    gameId = Text.map toUpper gameId'

-- | Loads the game with the given ID. If no game is found, create a game with the given player
-- as the host.
loadOrCreateGame :: MVar Platform -> Text -> PlayerName -> IO (MVar ActiveGame)
loadOrCreateGame platformVar gameId playerName =
  modifyMVar platformVar $ \platform ->
    case Map.lookup gameId platform of
      Nothing -> do
        activeGameVar <- initGameWithHost playerName >>= newMVar
        return (Map.insert gameId activeGameVar platform, activeGameVar)
      Just activeGameVar -> return (platform, activeGameVar)

-- | Clean up the given game.
cleanupGame :: MVar Platform -> Text -> IO ()
cleanupGame platformVar gameId = do
  modifyMVar_ platformVar $ pure . Map.delete gameId
  debugT $ "Game " ++ show gameId ++ " cleaned up"

{- Helpers -}

partitionM :: Monad m => (a -> m Bool) -> [a] -> m ([a], [a])
partitionM _ [] = pure ([], [])
partitionM f (x:xs) = do
  result <- f x
  (as, bs) <- partitionM f xs
  return $ if result
    then (x:as, bs)
    else (as, x:bs)
