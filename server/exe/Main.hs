{-# LANGUAGE CPP #-}
{-# LANGUAGE DataKinds #-}
{-# LANGUAGE TypeApplications #-}
{-# LANGUAGE TypeOperators #-}

import Control.Concurrent.MVar (MVar, modifyMVar, newMVar)
import Control.Monad.IO.Class (liftIO)
import Data.Map.Strict (Map)
import qualified Data.Map.Strict as Map
import Data.Text (Text)
import Network.Wai.Handler.Warp (run)
import Network.WebSockets (Connection)
import Servant
import Servant.API.WebSocket (WebSocket)

import Scattergories (ActiveGame, PlayerName, initGameWithHost, servePlayer)

type API =
       Capture "gameId" Text :> Capture "playerId" PlayerName :> WebSocket
  :<|> StaticAPI

main :: IO ()
main = do
  platformVar <- newMVar Map.empty

  run 8000 $ app platformVar

app :: MVar Platform -> Application
app platformVar = serve (Proxy @API) $ serverAPI platformVar

serverAPI :: MVar Platform -> Server API
serverAPI platformVar =
       serveGame platformVar
  :<|> serverStaticAPI

{- Serve websocket game -}

-- | The state of the platform, mapping game identifiers to Game.
type Platform = Map Text (MVar ActiveGame)

serveGame :: MVar Platform -> Text -> PlayerName -> Connection -> Handler ()
serveGame platformVar gameId playerName playerConn = liftIO $ do
  activeGameVar <- loadOrCreateGame platformVar gameId playerName
  servePlayer activeGameVar playerName playerConn

-- | Loads the game with the given ID. If no game is found, create a game with the given player
-- as the host.
loadOrCreateGame :: MVar Platform -> Text -> PlayerName -> IO (MVar ActiveGame)
loadOrCreateGame platformVar gameId playerName =
  modifyMVar platformVar $ \platform ->
    case Map.lookup gameId platform of
      Nothing -> do
        activeGameVar <- newMVar $ initGameWithHost playerName
        return (Map.insert gameId activeGameVar platform, activeGameVar)
      Just activeGameVar -> return (platform, activeGameVar)

{- Serving static files -}

#ifdef __SERVE_STATIC__
type StaticAPI =
       "static" :> Raw
  :<|> Raw

serverStaticAPI :: Server StaticAPI
serverStaticAPI =
       serveStatic
  :<|> serveHTML

-- | The location of static files
distDir :: FilePath
distDir = "./public/"

-- | Serve static files
serveStatic :: Server Raw
serveStatic = serveDirectoryFileServer distDir

-- | Serve index.html
serveHTML :: Server Raw
serveHTML = serveDirectoryWebApp distDir
#else
type StaticAPI = EmptyAPI

serverStaticAPI :: Server StaticAPI
serverStaticAPI = emptyServer
#endif
