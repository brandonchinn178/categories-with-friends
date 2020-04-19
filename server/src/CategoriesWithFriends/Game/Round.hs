{-# LANGUAGE DataKinds #-}
{-# LANGUAGE GADTs #-}
{-# LANGUAGE RecordWildCards #-}
{-# LANGUAGE TypeFamilies #-}

module CategoriesWithFriends.Game.Round
  ( GameRound
  , GameRoundInfo(..)
  , GameRoundStatus(..)
    -- * Queries
  , getRoundInfo
  , getAnswers
  , getRatedAnswers
    -- * Actions
  , generateRound
  , addAnswers
  , rateAnswers
  ) where

import Control.Monad.Random (uniform)
import Data.Time (UTCTime, addUTCTime, getCurrentTime)
import System.Random.Shuffle (shuffleM)

import CategoriesWithFriends.Game.Answer
    ( AllAnswers
    , AllRatedAnswers
    , AnswerRatings
    , AnswerStatus(..)
    , AnswersForPlayer
    , PlayerAnswers
    , initAnswers
    )
import qualified CategoriesWithFriends.Game.Answer as Answer
import CategoriesWithFriends.Game.Category (Category, allCategories)
import CategoriesWithFriends.Game.Player (PlayerName)

-- | A round in a game of CategoriesWithFriends.
data GameRound (status :: GameRoundStatus) = GameRound
  { roundInfo :: GameRoundInfo
  , answers   :: PlayerAnswers (GameRoundAnswerStatus status)
  }

-- | Static information about a round.
data GameRoundInfo = GameRoundInfo
  { roundNum   :: Int
  , categories :: [Category]
  , letter     :: Char
  , deadline   :: UTCTime
  } deriving (Show)

data GameRoundStatus = RoundBeingAnswered | RoundBeingRated | RoundDone

type family GameRoundAnswerStatus (status :: GameRoundStatus) :: AnswerStatus where
  GameRoundAnswerStatus 'RoundBeingAnswered = 'AnswersAccepted
  GameRoundAnswerStatus 'RoundBeingRated = 'AnswersLocked
  GameRoundAnswerStatus 'RoundDone = 'AnswersRated

{- Queries -}

getRoundInfo :: GameRound status -> GameRoundInfo
getRoundInfo = roundInfo

getAnswers :: GameRound 'RoundBeingRated -> AllAnswers
getAnswers = Answer.getAnswers . answers

getRatedAnswers :: GameRound 'RoundDone -> AllRatedAnswers
getRatedAnswers = Answer.getRatedAnswers . answers

{- Actions -}

-- | Generate a random round with the given players.
generateRound :: [PlayerName] -> Int -> IO (GameRound 'RoundBeingAnswered)
generateRound players roundNum = do
  categories <- take numCategories <$> shuffleM allCategories
  letter <- uniform allLetters
  deadline <- addUTCTime roundDuration <$> getCurrentTime

  return GameRound
    { roundInfo = GameRoundInfo{..}
    , answers = initAnswers players categories
    }
  where
    numCategories = 12
    roundDuration = 3 * 60 -- 3 minutes

    -- Scattergories excludes letters: Q U V X Y Z
    allLetters =
      [ 'A'
      , 'B'
      , 'C'
      , 'D'
      , 'E'
      , 'F'
      , 'G'
      , 'H'
      , 'I'
      , 'J'
      , 'K'
      , 'L'
      , 'M'
      , 'N'
      , 'O'
      , 'P'
      -- , 'Q'
      , 'R'
      -- , 'X'
      , 'T'
      -- , 'U'
      , 'V'
      , 'W'
      -- , 'X'
      -- , 'Y'
      -- , 'Z'
      ]

-- | Add the given answers for the given player.
addAnswers
  :: PlayerName
  -> AnswersForPlayer
  -> GameRound 'RoundBeingAnswered
  -> Either (GameRound 'RoundBeingAnswered) (GameRound 'RoundBeingRated)
addAnswers playerName playerAnswers gameRound =
  updateRound . Answer.addAnswers playerName playerAnswers . answers $ gameRound
  where
    updateRound (Right lockedAnswers) = Right gameRound { answers = lockedAnswers }
    updateRound (Left updatedAnswers) = Left gameRound { answers = updatedAnswers }

-- | Set the given ratings for the players' answers. Errors if an answer for a
-- player and category does not exist in the input.
rateAnswers :: AnswerRatings -> GameRound 'RoundBeingRated -> GameRound 'RoundDone
rateAnswers ratings gameRound =
  updateRound . Answer.rateAnswers ratings . answers $ gameRound
  where
    updateRound updatedAnswers = gameRound { answers = updatedAnswers }
