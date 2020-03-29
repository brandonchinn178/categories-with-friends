{-# LANGUAGE NamedFieldPuns #-}

module Scattergories.Game
  ( Game
  , PlayerName
  , GameStatus(..)
  , RoundStatus(..)
  , createGame
  , getStatus
  , getHost
  , initPlayer
  , getPlayers
  , Category
  , Answer
  ) where

import Data.Set (Set)
import qualified Data.Set as Set
import Data.Text (Text)

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
  | GameRound Int RoundStatus
  | GameDone
  deriving (Show, Eq)

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

{- Scattergories logic -}

type Category = Text
type Answer = Text
