{-# LANGUAGE CPP #-}
{-# LANGUAGE DataKinds #-}
{-# LANGUAGE TypeApplications #-}
{-# LANGUAGE TypeOperators #-}

#ifdef __SERVE_STATIC__
{-# LANGUAGE MultiParamTypeClasses #-}
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE TemplateHaskell #-}
#endif

import Control.Concurrent.MVar (MVar, modifyMVar, modifyMVar_, newMVar)
import Control.Monad.IO.Class (liftIO)
import Data.Map.Strict (Map)
import qualified Data.Map.Strict as Map
import Data.Text (Text)
import Network.Wai.Handler.Warp (run)
import Network.WebSockets (Connection)
import Servant
import Servant.API.WebSocket (WebSocket)
import System.Environment (lookupEnv)

#ifdef __SERVE_STATIC__
import Data.ByteString (ByteString)
import qualified Data.ByteString.Lazy as ByteStringL
import Data.FileEmbed (embedFile)
#endif

import Scattergories (ActiveGame, initGameWithHost, servePlayer)
import Scattergories.Game.Player (PlayerName)
import Scattergories.Logging (debugT)

type API =
       "game" :> Capture "gameId" Text :> Capture "playerId" PlayerName :> WebSocket
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
  :<|> serverStaticAPI

{- Serve websocket game -}

-- | The state of the platform, mapping game identifiers to Game.
type Platform = Map Text (MVar ActiveGame)

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
cleanupGame platformVar gameId =
  modifyMVar_ platformVar $ pure . Map.delete gameId

{- Serving static files -}

#ifdef __SERVE_STATIC__
data HTML

instance Accept HTML where
  contentType _ = "text/html"

instance MimeRender HTML ByteString where
  mimeRender _ = ByteStringL.fromStrict

type StaticAPI =
       "static" :> Raw
  :<|> "game" :> Capture "gameId" Text :> Capture "playerId" PlayerName :> Get '[HTML] ByteString
  :<|> "game" :> Capture "gameId" Text :> Get '[HTML] ByteString
  :<|> Get '[HTML] ByteString

serverStaticAPI :: Server StaticAPI
serverStaticAPI =
       serveStatic
  :<|> (\_ _ -> serveHTML)
  :<|> (\_ -> serveHTML)
  :<|> serveHTML

serveHTML :: Handler ByteString
serveHTML = pure $(embedFile "../public/index.html")

serveStatic :: Server Raw
serveStatic = serveDirectoryFileServer "./public"
#else
type StaticAPI = EmptyAPI

serverStaticAPI :: Server StaticAPI
serverStaticAPI = emptyServer
#endif
