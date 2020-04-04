{-# LANGUAGE ConstrainedClassMethods #-}
{-# LANGUAGE DataKinds #-}
{-# LANGUAGE FlexibleInstances #-}
{-# LANGUAGE GADTs #-}
{-# LANGUAGE RecordWildCards #-}
{-# LANGUAGE TupleSections #-}
{-# LANGUAGE TypeFamilies #-}

module CategoriesWithFriends.Game
  ( Game
  , GameStatus(..)
  , GameState(..)
    -- * Game information
  , getHost
  , getPlayers
  , getState
  , getScores
  , getPastRounds
    -- * Current round information
  , HasCurrentRound
  , CurrentRoundStatus
  , getRoundInfo
  , getAnswers
  , getRatedAnswers
    -- * Initializing a game
  , initGame
  , resetGame
  , initPlayer
    -- * Starting a round
  , startRound
    -- * Handle player answers
  , addAnswers
  , AddAnswersResult(..)
  , rateAnswers
  , RoundDoneResult(..)
    -- * Ending a round
  , hasNextRound
  ) where

import Data.Map.Strict (Map)
import qualified Data.Map.Strict as Map
import Data.Set (Set)
import qualified Data.Set as Set

import CategoriesWithFriends.Game.Answer
    (AllAnswers, AllRatedAnswers, AnswerRatings, AnswersForPlayer)
import CategoriesWithFriends.Game.Player (PlayerName)
import CategoriesWithFriends.Game.Round
    (GameRound, GameRoundInfo(roundNum), GameRoundStatus(..), generateRound)
import qualified CategoriesWithFriends.Game.Round as Round

data Game (status :: GameStatus) = Game
  { host       :: PlayerName
  , players    :: Set PlayerName
  , pastRounds :: [GameRound 'RoundDone]
  , state      :: GameState status
  }

data GameStatus = GameLoading | GameRunning GameRoundStatus | GameDone

data GameState (status :: GameStatus) where
  -- | Game initialized but waiting for players
  GameCreated
    :: GameState 'GameLoading

  -- | A game round is being answered by players
  GameRoundBeingAnswered
    :: GameRound 'RoundBeingAnswered
    -> GameState ('GameRunning 'RoundBeingAnswered)

  -- | A game round is being rated by players
  GameRoundBeingRated
    :: GameRound 'RoundBeingRated
    -> GameState ('GameRunning 'RoundBeingRated)

  -- | A game round has finished and is displaying results before the next
  -- round starts.
  GameRoundFinished
    :: GameRound 'RoundDone
    -> GameState ('GameRunning 'RoundDone)

  -- | All game rounds have been completed.
  GameFinished
    :: GameRound 'RoundDone
    -> GameState 'GameDone

{- Game information -}

getHost :: Game status -> PlayerName
getHost = host

getPlayers :: Game status -> [PlayerName]
getPlayers = Set.toList . players

getState :: Game status -> GameState status
getState = state

getScores :: Game status -> Map PlayerName Int
getScores game = Map.unionsWith (+) $ emptyScores : pastScores
  where
    -- in case no rounds have been played
    emptyScores = Map.fromList . map (, 0) . getPlayers $ game
    pastScores = map scoreRound . pastRounds $ game
    scoreRound gameRound = scorePlayer <$> Round.getRatedAnswers gameRound
    scorePlayer = Map.size . Map.filter ((== True) . snd)

getPastRounds :: Game status -> [GameRound 'RoundDone]
getPastRounds = pastRounds

{- Current round information -}

class HasCurrentRound (status :: GameStatus) where
  type CurrentRoundStatus status :: GameRoundStatus

  -- | Run the given function on the current round in the game.
  withCurrRound
    :: roundStatus ~ CurrentRoundStatus status
    => (GameRound roundStatus -> x) -> Game status -> x

  -- | Get the information for the current round.
  getRoundInfo :: Game status -> GameRoundInfo
  getRoundInfo = withCurrRound Round.getRoundInfo

  -- | Get the answers for the current round.
  getAnswers :: (CurrentRoundStatus status ~ 'RoundBeingRated) => Game status -> AllAnswers
  getAnswers = withCurrRound Round.getAnswers

  -- | Get the rated answers for the current round.
  getRatedAnswers :: (CurrentRoundStatus status ~ 'RoundDone) => Game status -> AllRatedAnswers
  getRatedAnswers = withCurrRound Round.getRatedAnswers

instance HasCurrentRound ('GameRunning status) where
  type CurrentRoundStatus ('GameRunning status) = status

  withCurrRound f game =
    case state game of
      GameRoundBeingAnswered gameRound -> f gameRound
      GameRoundBeingRated gameRound -> f gameRound
      GameRoundFinished gameRound -> f gameRound

instance HasCurrentRound 'GameDone where
  type CurrentRoundStatus 'GameDone = 'RoundDone

  withCurrRound f Game{state = GameFinished gameRound} = f gameRound

{- Initializing a game -}

-- | Initialize an empty game with the given player as the host.
initGame :: PlayerName -> Game 'GameLoading
initGame host = initGame' host $ Set.singleton host

-- | Reset a finished game.
resetGame :: Game 'GameDone -> Game 'GameLoading
resetGame Game{..} = initGame' host players

-- | Create a new game with the given host and players.
initGame' :: PlayerName -> Set PlayerName -> Game 'GameLoading
initGame' host players = Game { pastRounds = [], state = GameCreated, .. }

-- | Add the given player to the game.
--
-- Returns Nothing if the game is at the maximum number of players.
initPlayer :: PlayerName -> Game 'GameLoading -> Maybe (Game 'GameLoading)
initPlayer playerName game =
  if Set.size (players game) < maxPlayers
    then Just game { players = Set.insert playerName (players game) }
    else Nothing
  where
    maxPlayers = 20

{- Starting a round -}

class CanBeStarted (status :: GameStatus) where
  getNextRoundNum :: Game status -> Int

instance CanBeStarted 'GameLoading where
  getNextRoundNum = const 1

instance CanBeStarted ('GameRunning 'RoundDone) where
  getNextRoundNum = (+ 1) . roundNum . getRoundInfo

startRound :: CanBeStarted status => Game status -> IO (Game ('GameRunning 'RoundBeingAnswered))
startRound game = do
  gameRound <- generateRound (getPlayers game) (getNextRoundNum game)
  return $ game { state = GameRoundBeingAnswered gameRound }

{- Handle player answers -}

data AddAnswersResult
  = WaitForOtherPlayers (Game ('GameRunning 'RoundBeingAnswered))
  | GoToRatingPhase (Game ('GameRunning 'RoundBeingRated))

-- | Add the given answers for the given player, and return Right if everyone
-- has submitted their answers, or Left otherwise.
addAnswers
  :: PlayerName
  -> AnswersForPlayer
  -> Game ('GameRunning 'RoundBeingAnswered)
  -> AddAnswersResult
addAnswers playerName playerAnswers game = withCurrRound (updateGame . Round.addAnswers playerName playerAnswers) game
  where
    updateGame (Right lockedRound) = GoToRatingPhase $ game { state = GameRoundBeingRated lockedRound }
    updateGame (Left updatedRound) = WaitForOtherPlayers $ game { state = GameRoundBeingAnswered updatedRound }

-- | Set the given ratings for the players' answers.
-- Errors if an answer for a player and category does not exist in the input.
rateAnswers
  :: AnswerRatings
  -> Game ('GameRunning 'RoundBeingRated)
  -> RoundDoneResult
rateAnswers ratings game = withCurrRound (updateGame . Round.rateAnswers ratings) game
  where
    updateGame updatedRound = finishRound $ game
      { pastRounds = pastRounds game ++ [updatedRound]
      , state = GameRoundFinished updatedRound
      }

{- Ending a round -}

maxGameRounds :: Int
maxGameRounds = 3

data RoundDoneResult
  = AdvanceToNextRound (Game ('GameRunning 'RoundDone))
  | GameIsFinished (Game 'GameDone)

finishRound :: Game ('GameRunning 'RoundDone) -> RoundDoneResult
finishRound game@Game{ state = GameRoundFinished gameRound } =
  if roundNum (getRoundInfo game) < maxGameRounds
    then AdvanceToNextRound game
    else GameIsFinished $ game { state = GameFinished gameRound }

hasNextRound :: Game status -> Bool
hasNextRound Game{state = GameFinished{}} = False
hasNextRound _ = True
