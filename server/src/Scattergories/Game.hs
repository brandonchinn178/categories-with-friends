{-# LANGUAGE NamedFieldPuns #-}
{-# LANGUAGE RecordWildCards #-}
{-# LANGUAGE TemplateHaskell #-}

module Scattergories.Game
  ( Game
  , PlayerName
  , GameStatus(..)
  , RoundInfo(..)
  , RoundStatus(..)
  , createGame
  , getStatus
  , getHost
  , initPlayer
  , getPlayers
  , generateRound
  , Category
  , Answer
  ) where

import Control.Monad.Random (getRandomR)
import Data.FileEmbed (embedStringFile)
import Data.Set (Set)
import qualified Data.Set as Set
import Data.Text (Text)
import qualified Data.Text as Text
import System.Random.Shuffle (shuffleM)

{- Game infrastructure -}

type PlayerName = Text

data Game = Game
  { status  :: GameStatus
  , host    :: PlayerName
  , players :: Set PlayerName
  }
  deriving (Show)

data GameStatus
  = GameStart
  | GameRound RoundInfo RoundStatus
  | GameDone
  deriving (Show, Eq)

data RoundInfo = RoundInfo
  { roundNum   :: Int
  , categories :: [Category]
  , letter     :: Char
  } deriving (Show, Eq)

data RoundStatus
  = WriteAnswers
    -- ^ the part of the round where people write their answers
  | ValidateAnswers
    -- ^ the part of the round where people validate each others' answers
  deriving (Show, Eq)

createGame :: PlayerName -> Game
createGame host = Game
  { status = GameStart
  , host
  , players = Set.empty
  }

getStatus :: Game -> GameStatus
getStatus = status

getHost :: Game -> PlayerName
getHost = host

initPlayer :: PlayerName -> Game -> Game
initPlayer playerName game = game { players = Set.insert playerName (players game) }

getPlayers :: Game -> Set PlayerName
getPlayers = players

generateRound :: Int -> IO RoundInfo
generateRound roundNum = do
  categories <- take numCategories <$> shuffleM allCategories
  letter <- getRandomR ('A', 'Z')
  return RoundInfo{..}
  where
    numCategories = 12

{- Scattergories logic -}

type Category = Text
type Answer = Text

allCategories :: [Category]
allCategories = Text.lines $(embedStringFile "../data/categories.txt")
