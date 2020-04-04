{-# LANGUAGE CPP #-}
{-# LANGUAGE DataKinds #-}
{-# LANGUAGE TypeOperators #-}
#ifdef __SERVE_STATIC__
{-# LANGUAGE MultiParamTypeClasses #-}
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE TemplateHaskell #-}
#endif

module StaticAPI
  ( StaticAPI
  , serverStaticAPI
  ) where

import Servant

#ifdef __SERVE_STATIC__
import Data.ByteString (ByteString)
import qualified Data.ByteString.Lazy as ByteStringL
import Data.FileEmbed (embedFile)
import Data.Text (Text)

import CategoriesWithFriends.Game.Player (PlayerName)

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
