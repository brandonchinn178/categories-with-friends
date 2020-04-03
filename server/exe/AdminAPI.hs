{-# LANGUAGE DataKinds #-}
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE TypeOperators #-}

module AdminAPI
  ( AdminAPI
  , serverAdminAPI
  ) where

import Control.Concurrent.MVar (MVar, readMVar)
import Control.Monad.IO.Class (liftIO)
import Servant
import Servant.HTML.Blaze (HTML)
import Text.Blaze.Html (Markup)
import qualified Text.Blaze.Html5 as H

import Platform (Platform)

type AdminAPI =
  "admin" :> Get '[HTML] Markup

serverAdminAPI :: MVar Platform -> Server AdminAPI
serverAdminAPI platformVar = adminHome platformVar

adminHome :: MVar Platform -> Handler Markup
adminHome platformVar = do
  platform <- liftIO $ readMVar platformVar
  pure $ renderHome platform

{- Views -}

renderHome :: Platform -> Markup
renderHome _ = H.docTypeHtml $ do
  H.head $
    H.title "Categories With Friends"
  H.body $
    H.p "Hello world!"
