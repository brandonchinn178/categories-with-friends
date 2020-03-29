module Scattergories.Events
  ( Event(..)
  ) where

import Data.Map.Strict (Map)

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
