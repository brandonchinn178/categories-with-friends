{-# LANGUAGE OverloadedStrings #-}

module CategoriesWithFriends.Events
  ( Event(..)
  ) where

import Data.Aeson (FromJSON(..), withObject, (.:))
import Data.Map.Strict (Map)
import qualified Data.Text as Text

import CategoriesWithFriends.Game.Answer (Answer)
import CategoriesWithFriends.Game.Category (Category)
import CategoriesWithFriends.Game.Player (PlayerName)

data Event
  = StartRoundEvent
    -- ^ the host wants to start a round
  | SubmitAnswersEvent (Map Category Answer)
    -- ^ a player submitting their answers
  | EndValidationEvent (Map PlayerName (Map Category Bool))
    -- ^ a player has finished validating everyone's answers
  deriving (Show)

instance FromJSON Event where
  parseJSON = withObject "Event" $ \o -> do
    eventName <- o .: "event"
    case eventName of
      "start_round" -> pure StartRoundEvent
      "submit_answers" -> SubmitAnswersEvent <$> o .: "answers"
      "end_validation" -> EndValidationEvent <$> o .: "votes"
      _ -> fail $ "Invalid event: " ++ Text.unpack eventName
