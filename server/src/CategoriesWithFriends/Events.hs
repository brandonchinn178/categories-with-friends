{-# LANGUAGE OverloadedStrings #-}

module CategoriesWithFriends.Events
  ( Event(..)
  ) where

import Control.Monad (forM_, unless)
import Data.Aeson (FromJSON(..), Value, withObject, (.:))
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
  | EndValidationEvent (Map PlayerName (Map Category Int))
    -- ^ a player has finished validating everyone's answers
  | SendToAllEvent Value
    -- ^ an arbitrary payload to send to all clients
  deriving (Show)

instance FromJSON Event where
  parseJSON = withObject "Event" $ \o -> do
    eventName <- o .: "event"
    case eventName of
      "start_round" -> pure StartRoundEvent
      "submit_answers" -> SubmitAnswersEvent <$> o .: "answers"
      "end_validation" -> do
        scores <- o .: "scores"
        validateScores scores
        return $ EndValidationEvent scores
      "send_to_all" -> SendToAllEvent <$> o .: "payload"
      _ -> fail $ "Invalid event: " ++ Text.unpack eventName
    where
      validateScores scores =
        forM_ scores $ \playerScores ->
          forM_ playerScores $ \score ->
            unless (0 <= score && score <= 2) $
              fail "Score can only be a value between 0 - 2"
