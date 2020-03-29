{-# LANGUAGE DataKinds #-}
{-# LANGUAGE GADTs #-}
{-# LANGUAGE KindSignatures #-}
{-# LANGUAGE NamedFieldPuns #-}
{-# LANGUAGE RecordWildCards #-}
{-# LANGUAGE StandaloneDeriving #-}
{-# LANGUAGE TemplateHaskell #-}

module Scattergories.Game
  ( Game
  , GameStatus(..)
  , SGameStatus(..)
  , PlayerName
  , createGame
  , getStatus
  , markGameDone
  , getHost
  , initPlayer
  , getPlayers
  , Category
  , Answer
  , GameRound(..)
  , Vote(..)
  , isRoundDone
  , getCurrRound
  , startRound
  ) where

import Control.Monad.Random (getRandomR)
import Data.FileEmbed (embedStringFile)
import Data.Map (Map)
import qualified Data.Map as Map
import Data.Set (Set)
import qualified Data.Set as Set
import Data.Text (Text)
import qualified Data.Text as Text
import Data.Time (UTCTime, addUTCTime, getCurrentTime)
import System.Random.Shuffle (shuffleM)

{- Game infrastructure -}

type PlayerName = Text

data Game (status :: GameStatus) = Game
  { host    :: PlayerName
  , players :: Set PlayerName
  , rounds  :: [GameRound]
    -- ^ Invariant: non-empty if status is not GameLoading
  , status  :: SGameStatus status
  } deriving (Show)

createGame :: PlayerName -> Game 'GameLoading
createGame host = Game
  { host
  , players = Set.empty
  , rounds = []
  , status = SGameLoading
  }

getStatus :: Game status -> SGameStatus status
getStatus = status

markGameDone :: Game status -> Game 'GameDone
markGameDone game = game { status = SGameDone }

getHost :: Game status -> PlayerName
getHost = host

initPlayer :: PlayerName -> Game 'GameLoading -> Game 'GameLoading
initPlayer playerName game = game { players = Set.insert playerName (players game) }

getPlayers :: Game staus -> Set PlayerName
getPlayers = players

{- Game status -}

data GameStatus = GameLoading | GameInProgress | GameDone

-- | A witness that a Game is in one of the above statuses.
data SGameStatus (status :: GameStatus) where
  SGameLoading :: SGameStatus 'GameLoading
  SGameInProgress :: SGameStatus 'GameInProgress
  SGameDone :: SGameStatus 'GameDone

deriving instance Show (SGameStatus status)

{- Game rounds -}

type Category = Text
type Answer = Text

data GameRound = GameRound
  { roundNum   :: Int
  , categories :: [Category]
  , letter     :: Char
  , answers    :: Map PlayerName (Map Category (Answer, Vote))
    -- ^ Invariant: Either all votes are NO_VOTE, or none are
  , endTime    :: UTCTime
    -- ^ End of the answering round
  } deriving (Show)

data Vote = NO_VOTE | INVALID | VALID
  deriving (Show, Eq)

isRoundDone :: GameRound -> Bool
isRoundDone = all (all isAnswerVoted) . answers
  where
    isAnswerVoted = (/= NO_VOTE) . snd

getCurrRound :: Game 'GameInProgress -> GameRound
getCurrRound = last . rounds

class CanBeStarted (status :: GameStatus) where
  addRound :: GameRound -> Game status -> Game 'GameInProgress
  getNextRoundNum :: Game status -> Int

instance CanBeStarted 'GameLoading where
  addRound gameRound Game{..} = Game{ rounds = [gameRound], status = SGameInProgress, .. }
  getNextRoundNum = const 0

instance CanBeStarted 'GameInProgress where
  addRound gameRound game = game { rounds = rounds game ++ [gameRound] }
  getNextRoundNum = (+ 1) . roundNum . getCurrRound

startRound :: CanBeStarted status => Game status -> IO (Game 'GameInProgress, GameRound)
startRound game = do
  categories <- take numCategories <$> shuffleM allCategories
  letter <- getRandomR ('A', 'Z')
  endTime <- addUTCTime roundDuration <$> getCurrentTime
  let gameRound = GameRound
        { roundNum = getNextRoundNum game
        , answers = Map.empty
        , ..
        }

  return (addRound gameRound game, gameRound)
  where
    numCategories = 12
    roundDuration = 3 * 60 -- 3 minutes

{- Data -}

allCategories :: [Category]
allCategories = Text.lines $(embedStringFile "../data/categories.txt")
