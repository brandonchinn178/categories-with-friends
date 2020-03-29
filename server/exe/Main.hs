{-# LANGUAGE CPP #-}
{-# LANGUAGE DataKinds #-}
{-# LANGUAGE TypeApplications #-}
{-# LANGUAGE TypeOperators #-}

#ifdef __SERVE_STATIC__
{-# LANGUAGE TemplateHaskell #-}
#endif

import Control.Concurrent.MVar (MVar, modifyMVar, newMVar)
import Control.Monad.IO.Class (liftIO)
import Data.Map.Strict (Map)
import qualified Data.Map.Strict as Map
import Data.Text (Text)
import Network.Wai.Handler.Warp (run)
import Network.WebSockets (Connection)
import Servant
import Servant.API.WebSocket (WebSocket)

#ifdef __SERVE_STATIC__
import Data.FileEmbed (embedStringFile)
import WaiAppStatic.Storage.Embedded (embeddedSettings)
import WaiAppStatic.Types (StaticSettings(..))
#endif

import Scattergories (ActiveGame, PlayerName, initGameWithHost, servePlayer)

type API =
       Capture "gameId" Text :> Capture "playerId" PlayerName :> WebSocket
  :<|> StaticAPI

main :: IO ()
main = do
  platformVar <- newMVar Map.empty

  putStrLn $ "Running on port " ++ show port
  run port $ app platformVar
  where
    port = 8000

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
type StaticAPI = Raw

serverStaticAPI :: Server StaticAPI
serverStaticAPI = serveDirectoryWith staticSettings
  where
    staticSettings = (embeddedSettings staticFiles)
      { ssListing = Nothing -- disallow listing directory of static files
      }
    staticFiles =
      [ ("index.html", $(embedStringFile "../public/index.html"))
      , ("static/index.js", $(embedStringFile "../public/index.js"))
      ]
#else
type StaticAPI = EmptyAPI

serverStaticAPI :: Server StaticAPI
serverStaticAPI = emptyServer
#endif


