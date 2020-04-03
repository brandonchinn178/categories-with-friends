{-# LANGUAGE DataKinds #-}
{-# LANGUAGE TypeApplications #-}
{-# LANGUAGE TypeOperators #-}

import Control.Concurrent.MVar (MVar, modifyMVar, modifyMVar_, newMVar)
import Control.Monad.IO.Class (liftIO)
import qualified Data.Map.Strict as Map
import Data.Text (Text)
import Network.Wai.Handler.Warp (run)
import Network.WebSockets (Connection)
import Servant
import Servant.API.WebSocket (WebSocket)
import System.Environment (lookupEnv)

import CategoriesWithFriends (ActiveGame, initGameWithHost, servePlayer)
import CategoriesWithFriends.Game.Player (PlayerName)
import CategoriesWithFriends.Logging (debugT)

import AdminAPI (AdminAPI, serverAdminAPI)
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

  putStrLn $ "Running on port " ++ show port
  run port $ app platformVar

app :: MVar Platform -> Application
app platformVar = serve (Proxy @API) $ serverAPI platformVar

serverAPI :: MVar Platform -> Server API
serverAPI platformVar =
       serveGame platformVar
  :<|> serverAdminAPI platformVar
  :<|> serverStaticAPI

{- Serve websocket game -}

serveGame :: MVar Platform -> Text -> PlayerName -> Connection -> Handler ()
serveGame platformVar gameId playerName playerConn = liftIO $ do
  debugT $ "Got connection from " ++ show playerName ++ " (game: " ++ show gameId ++ ")"
  activeGameVar <- loadOrCreateGame platformVar gameId playerName
  servePlayer activeGameVar playerName playerConn (cleanupGame platformVar gameId)

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
