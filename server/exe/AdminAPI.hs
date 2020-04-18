{-# LANGUAGE DataKinds #-}
{-# LANGUAGE ExistentialQuantification #-}
{-# LANGUAGE NamedFieldPuns #-}
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE RecordWildCards #-}
{-# LANGUAGE TypeFamilies #-}
{-# LANGUAGE TypeOperators #-}

module AdminAPI
  ( AdminAPI
  , serverAdminAPI
  , AdminContext
  , initAdminContext
  ) where

import Control.Concurrent.MVar (MVar, readMVar)
import Control.Monad (forM_, unless, (>=>))
import Control.Monad.IO.Class (liftIO)
import Data.List (sortOn)
import qualified Data.Map.Strict as Map
import Data.Text (Text)
import qualified Data.Text as Text
import qualified Data.Text.Encoding as Text
import Servant
import Servant.HTML.Blaze (HTML)
import System.Environment (lookupEnv)
import Text.Blaze.Html (Markup, ToMarkup, (!))
import qualified Text.Blaze.Html5 as H
import qualified Text.Blaze.Html5.Attributes as A

import CategoriesWithFriends (ActiveGame(..))
import qualified CategoriesWithFriends.Game as Game
import qualified CategoriesWithFriends.Game.Round as Round

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
      -- TODO: show status and start time, sort by start time, then status
      H.li $ H.a ! A.href ("/admin/" <> H.textValue gameId) $ H.text gameId

renderGame :: Text -> ActiveGame -> AdminUser -> Markup
renderGame gameId ActiveGame{..} = renderHtml (Just gameId) $ do
  H.p $
    H.a ! A.href "/admin" $ H.text "< All games"

  H.h2 $ H.text $ "Game: " <> gameId
  renderGameInfo

  H.h2 "Current scores"
  renderScores

  -- render current game
  case Game.getState game of
    Game.GameRoundBeingAnswered gameRound ->
      renderRoundInfo gameRound "Answering"
    Game.GameRoundBeingRated gameRound -> do
      renderRoundInfo gameRound "Judging answers"
      renderAnswers gameRound (Round.getAnswers gameRound) id
    _ -> pure ()

  -- render all past games
  forM_ (reverse $ Game.getPastRounds game) $ \gameRound -> do
    renderRoundInfo gameRound "Finished"
    renderAnswers gameRound (Round.getRatedAnswers gameRound) $ \(answer, score) ->
      if Text.null answer
        then "--"
        else Text.unwords [answer, if score > 0 then "✔" else "✗"]
  where
    renderGameInfo = do
      let showRoundNum = show . Round.roundNum . Round.getRoundInfo
          inProgressStatus gameRound = "In Progress (round " <> showRoundNum gameRound <> ")"
      renderTable
        [ TableData "Start time" $ show startTime
        , TableData "Host" $ Game.getHost game
        , TableData "Players" $ renderList $ Game.getPlayers game
        , TableData "Status" $ Text.pack $
            case Game.getState game of
              Game.GameCreated{} -> "Created"
              Game.GameRoundBeingAnswered gameRound -> inProgressStatus gameRound
              Game.GameRoundBeingRated gameRound -> inProgressStatus gameRound
              Game.GameRoundFinished gameRound -> inProgressStatus gameRound
              Game.GameFinished{} -> "Finished"
        ]

    renderScores = do
      let sortedScores = sortOn snd . Map.toList . Game.getScores $ game
      renderTable $ map (uncurry TableData) sortedScores

    renderRoundInfo gameRound status = do
      let Round.GameRoundInfo{..} = Round.getRoundInfo gameRound
      H.h3 $ H.text $ "Round #" <> Text.pack (show roundNum)
      renderTable
        [ TableData "Status" $ H.text status
        , TableData "Categories" $ renderList categories
        , TableData "Letter" letter
        , TableData "Deadline" $ show deadline
        ]

    renderAnswers gameRound playerAnswers renderAnswer =
      let Round.GameRoundInfo{categories} = Round.getRoundInfo gameRound
          players = Map.keys playerAnswers
          headers = "Category" : players
      in renderTable' (Just headers) $
        flip map categories $ \category ->
          let lookupPlayer player = Map.lookup player >=> Map.lookup category
              renderPlayer player = case lookupPlayer player playerAnswers of
                Just answer -> H.text $ renderAnswer answer
                Nothing -> pure ()
          in H.text category : map renderPlayer players

renderError :: Text -> Markup
renderError msg = H.p $ "Error: " <> H.text msg

renderHtml :: Maybe Text -> Markup -> AdminUser -> Markup
renderHtml maybeTitle body AdminUser{..} = H.docTypeHtml $ do
  H.head $ do
    let titleSuffix = maybe "" ((" – " <>) . H.text) maybeTitle
    H.title $ "Categories With Friends" <> titleSuffix
    renderStyle
      [ Style "body"
          [ ("margin", "0")
          , ("padding", "20px 50px 100px")
          ]
      , Style "table"
          [ ("margin", "20px 0")
          ]
      , Style "table *"
          [ ("margin", "0")
          ]
      , Style "td"
          [ ("padding", "5px 20px")
          ]
      , Style "ul"
          [ ("padding-inline-start", "20px")
          ]
      , Style ".warning"
          [ ("color", "red")
          , ("font-weight", "bold")
          ]
      ]
  H.body $ do
    H.h1 "Categories With Friends"
    unless usedPassword $
      H.p ! A.class_ "warning" $ "WARNING: admin pages not secured by a password"

    body

{- Components -}

data Style = Style
  { selector :: Text
  , styles   :: [(Text, Text)]
  }

renderStyle :: [Style] -> Markup
renderStyle = H.style . H.text . Text.unlines . map mkStyle
  where
    mkStyle Style{..} = Text.unwords $ concat
      [ [selector, "{"]
      , flip map styles $ \(key, value) -> key <> ": " <> value <> ";"
      , ["}"]
      ]

data TableData = forall a. ToMarkup a => TableData
  { label :: Text
  , body  :: a
  }

renderTable :: [TableData] -> Markup
renderTable tableData = renderTable' Nothing $
  flip map tableData $ \TableData{..} ->
    [ H.strong $ H.text label
    , H.toMarkup body
    ]

renderTable' :: Maybe [Text] -> [[Markup]] -> Markup
renderTable' maybeHeaders tableRows =
  H.table ! H.customAttribute "border" "1" $ do
    case maybeHeaders of
      Just headers -> H.tr $ mapM_ (H.th . H.text) headers
      Nothing -> pure ()

    mapM_ (H.tr . mapM_ H.td) tableRows

renderList :: [Text] -> Markup
renderList = H.ul . mapM_ (H.li . H.text)
