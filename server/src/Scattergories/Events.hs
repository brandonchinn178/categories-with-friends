{-# LANGUAGE OverloadedStrings #-}

module Scattergories.Events
  ( Event(..)
  ) where

import Data.Aeson (FromJSON(..), withObject, (.:))
import Data.Map.Strict (Map)
import qualified Data.Text as Text

import Scattergories.Game (Answer, Category, PlayerName)

data Event
  = StartRoundEvent
    -- ^ the host wants to start a round
  | SubmitAnswersEvent (Map Category Answer)
    -- ^ a player submitting their answers
  | EndValidationEvent (Map PlayerName (Map Category Bool))
    -- ^ a player has finished validating everyone's answers
  | EndGameEvent
    -- ^ the host is ending the game for everyone
  deriving (Show)

instance FromJSON Event where
  parseJSON = withObject "Event" $ \o -> do
    eventName <- o .: "event"
    case eventName of
      "start_round" -> pure StartRoundEvent
      "submit_answers" -> SubmitAnswersEvent <$> o .: "answers"
      "end_validation" -> EndValidationEvent <$> o .: "votes"
      "end_game" -> pure EndGameEvent
      _ -> fail $ "Invalid event: " ++ Text.unpack eventName
