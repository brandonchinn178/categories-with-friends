{-# LANGUAGE DataKinds #-}
{-# LANGUAGE GADTs #-}
{-# LANGUAGE KindSignatures #-}
{-# LANGUAGE NamedFieldPuns #-}
{-# LANGUAGE RecordWildCards #-}
{-# LANGUAGE StandaloneDeriving #-}
{-# LANGUAGE TemplateHaskell #-}
{-# LANGUAGE TupleSections #-}

module Scattergories.Game
  ( Game
  , GameRound(GameRound, roundNum, categories, letter, endTime)
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
    -- * Game round logistics + operations
  , isRoundDone
  , getCurrRound
  , updateCurrRound
  , startRound
  , finalizeRound
    -- * Categories
  , Category
    -- * Answering phase
  , Answer
  , getAnswers
  , addPlayerAnswers
  , haveAllPlayersAnswered
  ) where

import Control.Monad ((<=<))
import Control.Monad.Random (getRandomR)
import Data.FileEmbed (embedStringFile)
import Data.Map.Strict (Map)
import qualified Data.Map.Strict as Map
import Data.Maybe (fromMaybe, isJust)
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
  , rounds  :: [GameRound]
    -- ^ Invariant: non-empty if status is not GameLoading
  } deriving (Show)

data GameRound = GameRound
  { roundNum   :: Int
  , categories :: [Category]
  , letter     :: Char
  , answers    :: Map PlayerName (Map Category (Answer, Maybe Bool))
    -- ^ Invariant: Either all ratings are Nothing, or Just
  , endTime    :: UTCTime
    -- ^ End of the answering round
  } deriving (Show)

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
    scoreRound = fmap scorePlayer . answers
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

{- Game round logistics + operations -}

isRoundDone :: GameRound -> Bool
isRoundDone = all (all isAnswerRated) . answers
  where
    isAnswerRated = isJust . snd

getCurrRound :: Game 'GameInProgress -> GameRound
getCurrRound = last . rounds

updateCurrRound :: Game 'GameInProgress -> (GameRound -> GameRound) -> Game 'GameInProgress
updateCurrRound game f = game { rounds = modifyLast (rounds game) }
  where
    modifyLast [] = error "modifyLast: empty list"
    modifyLast [x] = [f x]
    modifyLast (x:xs) = x : modifyLast xs

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

-- | Register the given ratings, which determine whether a player's answer is valid.
--
-- Invariant: for every player/category pair in a game round, the player/category pair MUST exist
-- in the ratings map.
finalizeRound :: Map PlayerName (Map Category Bool) -> GameRound -> GameRound
finalizeRound allRatings gameRound = gameRound
  { answers = Map.mapWithKey registerRatings $ answers gameRound
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

getAnswers :: GameRound -> Map PlayerName (Map Category Answer)
getAnswers = fmap (fmap fst) . answers

addPlayerAnswers :: PlayerName -> Map Category Answer -> GameRound -> GameRound
addPlayerAnswers playerName playerAnswers gameRound = gameRound
  { answers = Map.insert playerName (initRatings playerAnswers) (answers gameRound)
  }
  where
    initRatings = fmap (, Nothing)

-- | True if all players have submitted their answers.
haveAllPlayersAnswered :: Game 'GameInProgress -> Bool
haveAllPlayersAnswered game = all (`Map.member` answers) $ getPlayers game
  where
    GameRound{answers} = getCurrRound game
