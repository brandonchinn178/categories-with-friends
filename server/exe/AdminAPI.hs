{-# LANGUAGE DataKinds #-}
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE RecordWildCards #-}
{-# LANGUAGE TypeOperators #-}

module AdminAPI
  ( AdminAPI
  , serverAdminAPI
  , AdminContext
  , initAdminContext
  ) where

import Control.Concurrent.MVar (MVar, readMVar)
import Control.Monad (unless)
import Control.Monad.IO.Class (liftIO)
import Data.Text (Text)
import qualified Data.Text as Text
import qualified Data.Text.Encoding as Text
import Servant
import Servant.HTML.Blaze (HTML)
import System.Environment (lookupEnv)
import Text.Blaze.Html (Markup)
import qualified Text.Blaze.Html5 as H

import Platform (Platform)

data AdminUser = AdminUser
  { username     :: Text
  , usedPassword :: Bool
  }

type AdminAPI = BasicAuth "admin site" AdminUser :>
  ( "admin" :> Get '[HTML] Markup
  )

serverAdminAPI :: MVar Platform -> Server AdminAPI
serverAdminAPI platformVar = adminHome platformVar

type AdminContext = BasicAuthCheck AdminUser

initAdminContext :: IO AdminContext
initAdminContext = do
  adminUsername <- maybe "admin" Text.pack <$> lookupEnv "ADMIN_USERNAME"
  adminPassword <- fmap Text.pack <$> lookupEnv "ADMIN_PASSWORD"

  return $ BasicAuthCheck $ \BasicAuthData{..} -> do
    let username = Text.decodeUtf8 basicAuthUsername
        password = Text.decodeUtf8 basicAuthPassword
    pure $ case adminPassword of
      _ | username /= adminUsername -> NoSuchUser
      Just adminPassword'
        | password /= adminPassword' -> BadPassword
        | otherwise -> Authorized $ AdminUser username True
      _ -> Authorized $ AdminUser username False

{- Routes -}

adminHome :: MVar Platform -> AdminUser -> Handler Markup
adminHome platformVar adminUser = do
  platform <- liftIO $ readMVar platformVar
  pure $ renderHome platform adminUser

{- Views -}

renderHome :: Platform -> AdminUser -> Markup
renderHome _ AdminUser{..} = H.docTypeHtml $ do
  H.head $
    H.title "Categories With Friends"
  H.body $ do
    unless usedPassword $
      H.p $ H.strong "WARNING: admin pages not secured by a password"

    H.p "Hello world!"
