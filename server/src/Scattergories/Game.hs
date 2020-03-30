{-# LANGUAGE DataKinds #-}
{-# LANGUAGE DuplicateRecordFields #-}
{-# LANGUAGE GADTs #-}
{-# LANGUAGE KindSignatures #-}
{-# LANGUAGE NamedFieldPuns #-}
{-# LANGUAGE RankNTypes #-}
{-# LANGUAGE RecordWildCards #-}
{-# LANGUAGE StandaloneDeriving #-}
{-# LANGUAGE TemplateHaskell #-}
{-# LANGUAGE TupleSections #-}

module Scattergories.Game
  ( Game
  , GameRound(GameRound, roundNum, categories, letter, endTime)
  , SomeGameRound(..)
  , createGame
  , getScores
    -- * Players
  , PlayerName
  , getHost
  , getPlayers
  , initPlayer
    -- * Game status
  , GameStatus(..)
  , SGameStatus(..)
  , getStatus
  , markGameDone
  , GameRoundStatus(..)
  , SGameRoundStatus(..)
  , getRoundStatus
    -- * Game round logistics + operations
  , fromCurrRound
  , setCurrRound
  , startRound
  , lockAnswers
  , finalizeRound
    -- * Categories
  , Category
    -- * Answering phase
  , Answer
  , getAnswers
  , addPlayerAnswers
  ) where

import Control.Monad ((<=<))
import Control.Monad.Random (getRandomR)
import Data.FileEmbed (embedStringFile)
import Data.Map.Strict (Map)
import qualified Data.Map.Strict as Map
import Data.Maybe (fromMaybe)
import Data.Set (Set)
import qualified Data.Set as Set
import Data.Text (Text)
import qualified Data.Text as Text
import Data.Time (UTCTime, addUTCTime, getCurrentTime)
import System.Random.Shuffle (shuffleM)

data Game (status :: GameStatus) = Game
  { host    :: PlayerName
  , players :: Set PlayerName
  , status  :: SGameStatus status
  , rounds  :: [SomeGameRound]
    -- ^ Invariant: non-empty if status is not GameLoading
  } deriving (Show)

data GameRound (status :: GameRoundStatus) = GameRound
  { roundNum   :: Int
  , categories :: [Category]
  , letter     :: Char
  , status     :: SGameRoundStatus status
  , answers    :: Map PlayerName (Map Category (Answer, Maybe Bool))
    -- ^ Invariant: if status is RoundDone, all ratings are Just, otherwise they're all Nothing
  , endTime    :: UTCTime
    -- ^ End of the answering round
  } deriving (Show)

-- | A GameRound that forgot what its status is.
data SomeGameRound where
  SomeGameRound :: forall status. GameRound status -> SomeGameRound

deriving instance Show SomeGameRound

createGame :: PlayerName -> Game 'GameLoading
createGame host = Game
  { host
  , players = Set.empty
  , rounds = []
  , status = SGameLoading
  }

getScores :: Game status -> Map PlayerName Int
getScores = Map.unionsWith (+) . map scoreRound . rounds
  where
    scoreRound (SomeGameRound gameRound) = scorePlayer <$> answers gameRound
    scorePlayer = Map.size . Map.filter ((== Just True) . snd)

{- Players -}

type PlayerName = Text

getHost :: Game status -> PlayerName
getHost = host

getPlayers :: Game status -> [PlayerName]
getPlayers = Set.toList . players

initPlayer :: PlayerName -> Game 'GameLoading -> Game 'GameLoading
initPlayer playerName game = game { players = Set.insert playerName (players game) }

{- Game status -}

data GameStatus = GameLoading | GameInProgress | GameDone

-- | A witness that a Game is in one of the above statuses.
data SGameStatus (status :: GameStatus) where
  SGameLoading :: SGameStatus 'GameLoading
  SGameInProgress :: SGameStatus 'GameInProgress
  SGameDone :: SGameStatus 'GameDone

deriving instance Show (SGameStatus status)

getStatus :: Game status -> SGameStatus status
getStatus = status

markGameDone :: Game status -> Game 'GameDone
markGameDone game = game { status = SGameDone }

data GameRoundStatus = RoundBeingAnswered | RoundBeingValidated | RoundDone

-- | A witness that a GameRound is in one of the above statuses.
data SGameRoundStatus (status :: GameRoundStatus) where
  SRoundBeingAnswered :: SGameRoundStatus 'RoundBeingAnswered
  SRoundBeingValidated :: SGameRoundStatus 'RoundBeingValidated
  SRoundDone :: SGameRoundStatus 'RoundDone

deriving instance Show (SGameRoundStatus status)

getRoundStatus :: GameRound status -> SGameRoundStatus status
getRoundStatus = status

{- Game round logistics + operations -}

fromCurrRound :: Game 'GameInProgress -> (forall status. GameRound status -> x) -> x
fromCurrRound game f = fromGameRound $ last $ rounds game
  where
    fromGameRound (SomeGameRound gameRound) = f gameRound

setCurrRound :: GameRound status -> Game 'GameInProgress -> Game 'GameInProgress
setCurrRound gameRound game = game { rounds = replaceLast (rounds game) }
  where
    replaceLast [] = error "setCurrRound: empty game rounds"
    replaceLast [_] = [SomeGameRound gameRound]
    replaceLast (x:xs) = x : replaceLast xs

class CanBeStarted (status :: GameStatus) where
  addRound :: GameRound 'RoundBeingAnswered -> Game status -> Game 'GameInProgress
  getNextRoundNum :: Game status -> Int

instance CanBeStarted 'GameLoading where
  addRound gameRound game = game
    { rounds = [SomeGameRound gameRound]
    , status = SGameInProgress
    }
  getNextRoundNum = const 0

instance CanBeStarted 'GameInProgress where
  addRound gameRound game = game
    { rounds = rounds game ++ [SomeGameRound gameRound]
    }
  getNextRoundNum game = fromCurrRound game ((+ 1) . roundNum)

startRound :: CanBeStarted status => Game status -> IO (Game 'GameInProgress, GameRound 'RoundBeingAnswered)
startRound game = do
  categories <- take numCategories <$> shuffleM allCategories
  letter <- getRandomR ('A', 'Z')
  endTime <- addUTCTime roundDuration <$> getCurrentTime
  let gameRound = GameRound
        { roundNum = getNextRoundNum game
        , answers = Map.empty
        , status = SRoundBeingAnswered
        , ..
        }

  return (addRound gameRound game, gameRound)
  where
    numCategories = 12
    roundDuration = 3 * 60 -- 3 minutes

lockAnswers :: GameRound 'RoundBeingAnswered -> GameRound 'RoundBeingValidated
lockAnswers gameRound = gameRound { status = SRoundBeingValidated }

-- | Register the given ratings, which determine whether a player's answer is valid.
--
-- Invariant: for every player/category pair in a game round, the player/category pair MUST exist
-- in the ratings map.
finalizeRound :: Map PlayerName (Map Category Bool) -> GameRound 'RoundBeingValidated -> GameRound 'RoundDone
finalizeRound allRatings gameRound = gameRound
  { answers = Map.mapWithKey registerRatings $ answers gameRound
  , status = SRoundDone
  }
  where
    registerRatings playerName = Map.mapWithKey (registerRating playerName)
    registerRating playerName category (answer, _) =
      let isValid = fromMaybe
            (error $ "Could not find rating for: " ++ show (playerName, category))
            $ Map.lookup category <=< Map.lookup playerName $ allRatings
      in (answer, Just isValid)

{- Categories -}

type Category = Text

allCategories :: [Category]
allCategories = Text.lines $(embedStringFile "../data/categories.txt")

{- Answering phase -}

type Answer = Text

getAnswers :: GameRound status -> Map PlayerName (Map Category Answer)
getAnswers = fmap (fmap fst) . answers

addPlayerAnswers :: PlayerName -> Map Category Answer -> GameRound 'RoundBeingAnswered -> GameRound 'RoundBeingAnswered
addPlayerAnswers playerName playerAnswers gameRound = gameRound
  { answers = Map.insert playerName (initRatings playerAnswers) (answers gameRound)
  }
  where
    initRatings = fmap (, Nothing)
