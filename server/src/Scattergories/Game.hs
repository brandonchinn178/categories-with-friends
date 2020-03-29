{-# LANGUAGE NamedFieldPuns #-}
{-# LANGUAGE RecordWildCards #-}
{-# LANGUAGE TemplateHaskell #-}

module Scattergories.Game
  ( Game
  , PlayerName
  , createGame
  , isGameStarted
  , isGameDone
  , markGameDone
  , getHost
  , initPlayer
  , getPlayers
  , startRound
  , getLastRound
  , Category
  , Answer
  , GameRound(..)
  , Vote(..)
  , isRoundDone
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

data Game = Game
  { host    :: PlayerName
  , players :: Set PlayerName
  , rounds  :: [GameRound]
  , isDone  :: Bool
  }
  deriving (Show)

createGame :: PlayerName -> Game
createGame host = Game
  { host
  , players = Set.empty
  , rounds = []
  , isDone = False
  }

isGameStarted :: Game -> Bool
isGameStarted = null . rounds

isGameDone :: Game -> Bool
isGameDone Game{isDone} = isDone

markGameDone :: Game -> Game
markGameDone game = game { isDone = True }

getHost :: Game -> PlayerName
getHost = host

initPlayer :: PlayerName -> Game -> Game
initPlayer playerName game = game { players = Set.insert playerName (players game) }

getPlayers :: Game -> Set PlayerName
getPlayers = players

startRound :: Game -> IO (Game, GameRound)
startRound game = do
  let nextRoundNum = maybe 0 ((+ 1) . roundNum) $ getLastRound game

  categories <- take numCategories <$> shuffleM allCategories
  letter <- getRandomR ('A', 'Z')
  endTime <- addUTCTime roundDuration <$> getCurrentTime
  let gameRound = GameRound
        { roundNum = nextRoundNum
        , answers = Map.empty
        , ..
        }
      updatedGame = game { rounds = rounds game ++ [gameRound] }

  return (updatedGame, gameRound)
  where
    numCategories = 12
    roundDuration = 3 * 60 -- 3 minutes

getLastRound :: Game -> Maybe GameRound
getLastRound Game{rounds} = if null rounds then Nothing else Just $ last rounds

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

{- Data -}

allCategories :: [Category]
allCategories = Text.lines $(embedStringFile "../data/categories.txt")
