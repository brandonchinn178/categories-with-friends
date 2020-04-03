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
import Control.Monad (forM_, unless)
import Control.Monad.IO.Class (liftIO)
import qualified Data.Map.Strict as Map
import Data.Text (Text)
import qualified Data.Text as Text
import qualified Data.Text.Encoding as Text
import Servant
import Servant.HTML.Blaze (HTML)
import System.Environment (lookupEnv)
import Text.Blaze.Html (Markup, (!))
import qualified Text.Blaze.Html5 as H
import qualified Text.Blaze.Html5.Attributes as A

import CategoriesWithFriends (ActiveGame(..))
import qualified CategoriesWithFriends.Game as Game

import Platform (Platform)

data AdminUser = AdminUser
  { username     :: Text
  , usedPassword :: Bool
  }

type AdminAPI = BasicAuth "admin site" AdminUser :>
  (    "admin" :> Get '[HTML] Markup
  :<|> "admin" :> Capture "gameId" Text :> Get '[HTML] Markup
  )

serverAdminAPI :: MVar Platform -> Server AdminAPI
serverAdminAPI platformVar adminUser =
       adminHome platformVar adminUser
  :<|> adminGame platformVar adminUser

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

adminGame :: MVar Platform -> AdminUser -> Text -> Handler Markup
adminGame platformVar adminUser gameId = do
  platform <- liftIO $ readMVar platformVar
  case gameId `Map.lookup` platform of
    Nothing -> pure $ renderError $ "No game with ID: " <> gameId
    Just activeGameVar -> do
      activeGame <- liftIO $ readMVar activeGameVar
      pure $ renderGame gameId activeGame adminUser

{- Views -}

renderHome :: Platform -> AdminUser -> Markup
renderHome platform = renderHtml Nothing $ do
  H.p "Running games:"
  H.ul $
    forM_ (Map.keys platform) $ \gameId ->
      H.li $ H.a ! A.href ("admin/" <> H.textValue gameId) $ H.text gameId

renderGame :: Text -> ActiveGame -> AdminUser -> Markup
renderGame gameId ActiveGame{..} = renderHtml (Just gameId) $
  H.table ! H.customAttribute "border" "1" $ do
    row "ID" $ H.text gameId
    row "Start time" $ H.toMarkup $ show startTime
    row "Host" $ H.text $ Game.getHost game
    row "Players" $ H.ul $
      mapM_ (H.li . H.text) (Game.getPlayers game)
  where
    row label body = H.tr $ do
      H.td ! H.customAttribute "valign" "top" $ H.strong label
      H.td body

      -- TODO
      -- { host       :: PlayerName
      -- , players    :: Set PlayerName
      -- , pastRounds :: [GameRound 'RoundDone]
      -- , state      :: GameState status
      -- }

renderError :: Text -> Markup
renderError msg = H.p $ "Error: " <> H.text msg

renderHtml :: Maybe Text -> Markup -> AdminUser -> Markup
renderHtml maybeTitle body AdminUser{..} = H.docTypeHtml $ do
  H.head $ do
    let titleSuffix = maybe "" ((" – " <>) . H.text) maybeTitle
    H.title $ "Categories With Friends" <> titleSuffix
    H.style $ H.text $ Text.unlines
      [ "table * { margin: 0; }"
      , "td { padding: 5px 20px; }"
      , "table ul { padding: 0; }"
      , ".warning { color: red; font-weight: bold; }"
      ]
  H.body $ do
    H.h1 "Categories With Friends"
    unless usedPassword $
      H.p ! A.class_ "warning" $ "WARNING: admin pages not secured by a password"

    body
