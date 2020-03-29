{-# LANGUAGE OverloadedStrings #-}

module Scattergories.Events
  ( Event(..)
  ) where

import Data.Aeson (FromJSON(..), withObject, (.:))
import Data.Map.Strict (Map)
import qualified Data.Text as Text

import Scattergories.Game (Answer, Category, PlayerName)

data Event
  = StartRound
    -- ^ the host wants to start a round
  | SubmitAnswers (Map Category Answer)
    -- ^ a player submitting their answers
  | EndValidation (Map PlayerName (Map Category Bool))
    -- ^ a player has finished validating everyone's answers
  | EndGame
    -- ^ the host is ending the game for everyone
  deriving (Show)

instance FromJSON Event where
  parseJSON = withObject "Event" $ \o -> do
    eventName <- o .: "event"
    case eventName of
      "start_round" -> pure StartRound
      "submit_answers" -> SubmitAnswers <$> o .: "answers"
      "end_validation" -> EndValidation <$> o .: "votes"
      "end_game" -> pure EndGame
      _ -> fail $ "Invalid event: " ++ Text.unpack eventName
