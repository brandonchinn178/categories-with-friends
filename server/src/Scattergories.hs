{-# LANGUAGE DataKinds #-}
{-# LANGUAGE GADTs #-}
{-# LANGUAGE LambdaCase #-}
{-# LANGUAGE NamedFieldPuns #-}
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE RecordWildCards #-}

module Scattergories
  ( ActiveGame
  , initGameWithHost
  , servePlayer
  ) where

import Control.Concurrent.MVar (MVar, modifyMVar_, readMVar)
import Control.Exception (fromException, throwIO, try)
import Control.Monad (forM_, unless, when)
import Data.Aeson (FromJSON, ToJSON, eitherDecode', encode)
import Data.Map.Strict (Map)
import qualified Data.Map.Strict as Map
import Data.Maybe (fromMaybe)
import Data.Time (addUTCTime, getCurrentTime)
import Network.WebSockets
    ( Connection
    , ConnectionException(..)
    , receiveData
    , sendTextData
    , withPingThread
    )

import Scattergories.ActiveGame (ActiveGame(..))
import Scattergories.Errors (ServerError(..))
import Scattergories.Events (Event(..))
import Scattergories.Game
import Scattergories.Game.Answer (Answer)
import Scattergories.Game.Category (Category)
import Scattergories.Game.Player (PlayerName)
import Scattergories.Game.Round (GameRoundStatus(..))
import Scattergories.Logging (debugT)
import Scattergories.Messages (Message(..))

initGameWithHost :: PlayerName -> IO ActiveGame
initGameWithHost host = do
  now <- getCurrentTime
  return ActiveGame
    { game = createGame host
    , playerConns = Map.empty
    , startTime = now
    }

servePlayer :: MVar ActiveGame -> PlayerName -> Connection -> IO () -> IO ()
servePlayer activeGameVar playerName playerConn cleanupGame = do
  modifyMVar_ activeGameVar $ setupPlayer playerName playerConn

  withPingThread playerConn pingDelay postPing $ runLoop $ do
    event <- receiveJSONData playerConn
    debugT $ "Player " ++ show playerName ++ " sent: " ++ show event

    case event of
      StartRoundEvent ->
        handleEventOnlyHost startGameRound
      SubmitAnswersEvent playerAnswers ->
        handleEvent $ registerAnswers playerName playerAnswers
      EndValidationEvent ratings ->
        handleEventOnlyHost $ registerRatings ratings
  where
    pingDelay = 30 -- seconds
    postPing = return ()

    handleEventOnlyHost f = handleEvent $ \activeGame@ActiveGame{game} -> do
      unless (getHost game == playerName) $ throwIO NotHostError
      f activeGame

    handleEvent = modifyMVar_ activeGameVar

    -- | Continually run the given action, until the player should stop being
    -- served, which would happen if:
    --   1. A CloseRequest exception is thrown (client requested closing of connection)
    --   2. Game has run for too long
    --
    -- Any other errors are sent to the client
    runLoop m = do
      shouldCleanUp <- readMVar activeGameVar >>= hasTimedOut
      if shouldCleanUp
        then stopLoop
        else try m >>= \case
          Left e -> case fromException e of
            Just CloseRequest{} -> stopLoop
            _ -> do
              let serverErr = fromMaybe (UnexpectedServerError e) (fromException e)
              sendJSONData playerConn serverErr
              runLoop m
          Right _ -> runLoop m

    stopLoop = modifyMVar_ activeGameVar $ \activeGame -> do
      let updatedPlayerConns = Map.delete playerName (playerConns activeGame)
      when (Map.null updatedPlayerConns) cleanupGame
      return $ activeGame { playerConns = updatedPlayerConns }

    hasTimedOut ActiveGame{startTime} = do
      now <- getCurrentTime
      let timeout = 3600 -- 1 hour
      return $ addUTCTime timeout startTime < now

{- Game mechanics -}

-- | If the game hasn't started yet, add the given player to the game and notify everyone of the
-- new arrival.
setupPlayer :: PlayerName -> Connection -> ActiveGame -> IO ActiveGame
setupPlayer playerName playerConn activeGame = do
  when isPlayerAlreadyConnected $ throwCannotJoin "you're already in the game"

  -- hack to keep existential within scope
  ActiveGame{game} <- pure activeGame
  updatedActiveGame <- case getState game of
    GameCreated -> addPlayerToGame game
    GameRoundBeingAnswered{} -> refreshPlayerState game startRoundMessage
    GameRoundBeingRated{} -> refreshPlayerState game startValidationMessage
    GameRoundFinished{} -> refreshPlayerState game endRoundMessage
    GameFinished{} -> refreshPlayerState game endRoundMessage

  return updatedActiveGame
    { playerConns = Map.insert playerName playerConn $ playerConns activeGame
    }
  where
    isPlayerAlreadyConnected = playerName `Map.member` playerConns activeGame
    throwCannotJoin = throwIO . CannotJoinGameError

    addPlayerToGame :: Game 'GameLoading -> IO ActiveGame
    addPlayerToGame game =
      case initPlayer playerName game of
        Nothing -> throwCannotJoin "maximum number of players already in game"
        Just updatedGame -> do
          sendJSONData playerConn $ refreshPlayerListMessage game
          setGameAndMessageAll updatedGame refreshPlayerListMessage activeGame

    refreshPlayerState :: Game status -> (Game status -> Message) -> IO ActiveGame
    refreshPlayerState game mkMessage = do
      let isPlayerInGroup = playerName `elem` getPlayers game
      unless isPlayerInGroup $ throwCannotJoin "game already started without you"
      sendJSONData playerConn $ mkMessage game
      return activeGame

-- | Start a new round in the game.
startGameRound :: ActiveGame -> IO ActiveGame
startGameRound activeGame@ActiveGame{game} =
  case getState game of
    GameFinished{} -> throwUnexpectedEvent "game is over"
    GameRoundBeingAnswered{} -> throwUnexpectedEvent "round isn't over"
    GameRoundBeingRated{} -> throwUnexpectedEvent "round isn't over"
    GameCreated -> do
      updatedGame <- startRound game
      setGameAndMessageAll updatedGame startRoundMessage activeGame
    GameRoundFinished{} -> do
      updatedGame <- startRound game
      setGameAndMessageAll updatedGame startRoundMessage activeGame
  where
    throwUnexpectedEvent = throwIO . UnexpectedEventError "start_round"

-- | Register the given player's answers. If this person was the last person to answer, send
-- everyone the start_validation message.
registerAnswers :: PlayerName -> Map Category Answer -> ActiveGame -> IO ActiveGame
registerAnswers playerName playerAnswers activeGame@ActiveGame{game} =
  case getState game of
    GameCreated -> throwUnexpectedEvent "game hasn't started"
    GameFinished{} -> throwUnexpectedEvent "game is over"
    GameRoundBeingRated{} -> throwUnexpectedEvent "answers are locked for the round"
    GameRoundFinished{} -> throwUnexpectedEvent "round is over"
    GameRoundBeingAnswered{} ->
      case addAnswers playerName playerAnswers game of
        GoToRatingPhase updatedGame ->
          setGameAndMessageAll updatedGame startValidationMessage activeGame
        WaitForOtherPlayers updatedGame ->
          return $ setGame updatedGame activeGame
  where
    throwUnexpectedEvent = throwIO . UnexpectedEventError "submit_answers"

-- | Register the given answer ratings and send the results to everyone.
registerRatings :: Map PlayerName (Map Category Bool) -> ActiveGame -> IO ActiveGame
registerRatings ratings activeGame@ActiveGame{game} =
  case getState game of
    GameCreated -> throwUnexpectedEvent "game hasn't started"
    GameFinished{} -> throwUnexpectedEvent "game is over"
    GameRoundBeingAnswered{} -> throwUnexpectedEvent "players are still answering"
    GameRoundFinished{} -> throwUnexpectedEvent "round is over"
    GameRoundBeingRated{} ->
      case rateAnswers ratings game of
        AdvanceToNextRound updatedGame -> setGameAndMessageAll updatedGame endRoundMessage activeGame
        GameIsFinished updatedGame -> setGameAndMessageAll updatedGame endRoundMessage activeGame
  where
    throwUnexpectedEvent = throwIO . UnexpectedEventError "end_validation"

{- Messages -}

refreshPlayerListMessage :: Game 'GameLoading -> Message
refreshPlayerListMessage game = RefreshPlayerListMessage (getHost game) (getPlayers game)

startRoundMessage :: Game ('GameRunning 'RoundBeingAnswered) -> Message
startRoundMessage game = StartRoundMessage (getRoundInfo game)

startValidationMessage :: Game ('GameRunning 'RoundBeingRated) -> Message
startValidationMessage game = StartValidationMessage (getRoundInfo game) (getAnswers game)

endRoundMessage :: (HasCurrentRound status, CurrentRoundStatus status ~ 'RoundDone) => Game status -> Message
endRoundMessage game = EndRoundMessage (getRoundInfo game) (getRatedAnswers game) (getScores game) (hasNextRound game)

{- ActiveGame helpers -}

setGame :: Game status -> ActiveGame -> ActiveGame
setGame updatedGame ActiveGame{..} = ActiveGame { game = updatedGame, .. }

setGameAndMessageAll :: Game status -> (Game status -> Message) -> ActiveGame -> IO ActiveGame
setGameAndMessageAll updatedGame mkMessage activeGame = do
  debugT $ "Sending message to all players: " ++ show message
  forM_ (Map.elems $ playerConns activeGame) $ \conn ->
    sendJSONData conn message

  return $ setGame updatedGame activeGame
  where
    message = mkMessage updatedGame

{- WebSocket helpers -}

receiveJSONData :: FromJSON a => Connection -> IO a
receiveJSONData conn = either fail return . eitherDecode' =<< receiveData conn

sendJSONData :: ToJSON a => Connection -> a -> IO ()
sendJSONData conn = sendTextData conn . encode
