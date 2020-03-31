{-# LANGUAGE DataKinds #-}
{-# LANGUAGE GADTs #-}
{-# LANGUAGE RecordWildCards #-}
{-# LANGUAGE TypeFamilies #-}

module Scattergories.Game.Round
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
  , tryLockAnswers
  , rateAnswers
  ) where

import Control.Monad.Random (getRandomR)
import Data.Functor.Identity (Identity(..))
import Data.Time (UTCTime, addUTCTime, getCurrentTime)
import System.Random.Shuffle (shuffleM)

import Scattergories.Game.Answer
    ( AllAnswers
    , AllRatedAnswers
    , AnswerRatings
    , AnswerStatus(..)
    , AnswersForPlayer
    , PlayerAnswers
    , initAnswers
    )
import qualified Scattergories.Game.Answer as Answer
import Scattergories.Game.Category (Category, allCategories)
import Scattergories.Game.Player (PlayerName)

-- | A round in a game of Scattergories.
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
  }

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
  letter <- getRandomR ('A', 'Z')
  deadline <- addUTCTime roundDuration <$> getCurrentTime

  return GameRound
    { roundInfo = GameRoundInfo{..}
    , answers = initAnswers players categories
    }
  where
    numCategories = 12
    roundDuration = 3 * 60 -- 3 minutes

-- | Add the given answers for the given player.
addAnswers :: PlayerName -> AnswersForPlayer -> GameRound 'RoundBeingAnswered -> GameRound 'RoundBeingAnswered
addAnswers playerName playerAnswers = updateAnswers (Answer.addAnswers playerName playerAnswers)

-- | Try to lock the answers in the given round. Return Just with the updated
-- round if everyone has submitted answers, otherwise return Nothing.
tryLockAnswers :: GameRound 'RoundBeingAnswered -> Maybe (GameRound 'RoundBeingRated)
tryLockAnswers = updateAnswers' Answer.tryLockAnswers

-- | Set the given ratings for the players' answers. Errors if an answer for a
-- player and category does not exist in the input.
rateAnswers :: AnswerRatings -> GameRound 'RoundBeingRated -> GameRound 'RoundDone
rateAnswers ratings = updateAnswers (Answer.rateAnswers ratings)

{- Helpers -}

updateAnswers
  :: (PlayerAnswers (GameRoundAnswerStatus status1) -> PlayerAnswers (GameRoundAnswerStatus status2))
  -> GameRound status1
  -> GameRound status2
updateAnswers f = runIdentity . updateAnswers' (Identity . f)

updateAnswers'
  :: Functor f
  => (PlayerAnswers (GameRoundAnswerStatus status1) -> f (PlayerAnswers (GameRoundAnswerStatus status2)))
  -> GameRound status1
  -> f (GameRound status2)
updateAnswers' f gameRound = fmap updateRound . f . answers $ gameRound
  where
    updateRound updatedAnswers = gameRound { answers = updatedAnswers }
