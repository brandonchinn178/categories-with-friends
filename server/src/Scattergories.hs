{-# LANGUAGE DataKinds #-}
{-# LANGUAGE GADTs #-}
{-# LANGUAGE LambdaCase #-}
{-# LANGUAGE NamedFieldPuns #-}
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE RankNTypes #-}

module Scattergories
  ( ActiveGame
  , initGameWithHost
  , servePlayer
  , module X
  ) where

import Control.Concurrent.MVar (MVar, modifyMVar_)
import Control.Exception (fromException, throwIO, try)
import Control.Monad (forM_, unless, when)
import Data.Aeson (FromJSON, ToJSON, eitherDecode', encode)
import Data.Map.Strict (Map)
import qualified Data.Map.Strict as Map
import Data.Maybe (fromMaybe)
import Network.WebSockets
    ( Connection
    , ConnectionException(..)
    , receiveData
    , sendTextData
    , withPingThread
    )

import Scattergories.Errors as X
import Scattergories.Events as X
import Scattergories.Game as X
import Scattergories.Messages as X

data ActiveGameState status = ActiveGameState
  { game        :: Game status
  , playerConns :: Map PlayerName Connection
  }

-- | An ActiveGameState that forgot what its status is.
data ActiveGame where
  ActiveGame :: forall status. ActiveGameState status -> ActiveGame

initGameWithHost :: PlayerName -> ActiveGame
initGameWithHost host = ActiveGame $
  ActiveGameState
    { game = createGame host
    , playerConns = Map.empty
    }

servePlayer :: MVar ActiveGame -> PlayerName -> Connection -> IO ()
servePlayer activeGameVar playerName playerConn = do
  modifyMVar_ activeGameVar $ setupPlayer playerName playerConn

  withPingThread playerConn pingDelay postPing $ runLoop $
    receiveJSONData playerConn >>= \case
      StartRoundEvent ->
        handleEventOnlyHost startGameRound
      SubmitAnswersEvent playerAnswers ->
        handleEvent $ registerAnswers playerName playerAnswers
      EndValidationEvent ratings ->
        handleEventOnlyHost $ registerRatings ratings
      EndGameEvent ->
        handleEventOnlyHost endGame
  where
    pingDelay = 30 -- seconds
    postPing = return ()

    -- continually run the given action, until a CloseRequest exception is thrown
    -- any other errors are sent to the client
    runLoop m = try m >>= \case
      Left e ->
        case fromException e of
          Just CloseRequest{} ->
            modifyMVar_ activeGameVar $ \(ActiveGame activeGame) -> pure $ ActiveGame
              activeGame
                { playerConns = Map.delete playerName (playerConns activeGame)
                }
          _ -> do
            let serverErr = fromMaybe (UnexpectedServerError e) (fromException e)
            sendJSONData playerConn serverErr
            runLoop m
      Right _ -> runLoop m

    handleEventOnlyHost f = handleEvent $ \activeGame@(ActiveGame ActiveGameState{game}) -> do
      unless (getHost game == playerName) $ throwIO NotHostError
      f activeGame

    handleEvent = modifyMVar_ activeGameVar

{- Game mechanics -}

-- | If the game hasn't started yet, add the given player to the game and notify everyone of the
-- new arrival.
setupPlayer :: PlayerName -> Connection -> ActiveGame -> IO ActiveGame
setupPlayer playerName playerConn (ActiveGame activeGame) = do
  when isPlayerAlreadyConnected $ throwCannotJoin "you're already in the game"

  let ActiveGameState{game} = activeGame
  case getStatus game of
    SGameLoading -> addPlayerToGame game
    SGameDone -> throwCannotJoin "game is over"
    SGameInProgress -> refreshPlayerState game
  where
    isPlayerAlreadyConnected = playerName `Map.member` playerConns activeGame
    throwCannotJoin = throwIO . CannotJoinGameError

    addPlayerToGame game = do
      let updatedGame = initPlayer playerName game
          updatedActiveGame = activeGame
            { game = updatedGame
            , playerConns = Map.insert playerName playerConn $ playerConns activeGame
            }
      sendToAll updatedActiveGame $
        RefreshPlayerListMessage (getHost updatedGame) (getPlayers updatedGame)
      return $ ActiveGame updatedActiveGame

    refreshPlayerState game = do
      let isPlayerInGroup = playerName `elem` getPlayers game
      unless isPlayerInGroup $ throwCannotJoin "game already started without you"

      let message = fromCurrRound game $ \gameRound ->
            case getRoundStatus gameRound of
              SRoundBeingAnswered -> StartRoundMessage gameRound
              SRoundBeingValidated -> StartValidationMessage $ getAnswers gameRound
              SRoundDone -> undefined -- TODO: send EndValidationMessage
      sendJSONData playerConn (message :: Message)

      return $ ActiveGame activeGame

-- | Start a new round in the game.
startGameRound :: ActiveGame -> IO ActiveGame
startGameRound (ActiveGame activeGame@ActiveGameState{game}) = do
  (game', newRound) <- startRound'
  let activeGame' = activeGame { game = game' }
  sendToAll activeGame' $ StartRoundMessage newRound
  return $ ActiveGame activeGame'
  where
    startRound' :: IO (Game 'GameInProgress, GameRound 'RoundBeingAnswered)
    startRound' = case getStatus game of
      SGameDone -> throwUnexpectedEvent "game is done"
      SGameLoading -> startRound game
      SGameInProgress -> fromCurrRound game $ \gameRound ->
        case getRoundStatus gameRound of
          SRoundDone -> startRound game
          _ -> throwUnexpectedEvent "round isn't over"

    throwUnexpectedEvent = throwIO . UnexpectedEventError "start_round"

-- | Register the given player's answers. If this person was the last person to answer, send
-- everyone the start_validation message.
registerAnswers :: PlayerName -> Map Category Answer -> ActiveGame -> IO ActiveGame
registerAnswers playerName playerAnswers (ActiveGame activeGame@ActiveGameState{game}) =
  case getStatus game of
    SGameLoading -> throwUnexpectedEvent "game hasn't started"
    SGameDone -> throwUnexpectedEvent "game is over"
    SGameInProgress -> fromCurrRound game $ \gameRound ->
      case getRoundStatus gameRound of
        SRoundBeingValidated -> throwUnexpectedEvent "answers are locked for the round"
        SRoundDone -> throwUnexpectedEvent "round is over"
        SRoundBeingAnswered -> do
          let updatedRound = addPlayerAnswers playerName playerAnswers gameRound
              updatedAnswers = getAnswers updatedRound
              resolveRound :: GameRound status -> IO ActiveGame
              resolveRound updatedRound' = return $ ActiveGame $ activeGame { game = setCurrRound updatedRound' game }

          -- check if all players have answers submitted
          if all (`Map.member` updatedAnswers) $ getPlayers game
            then do
              sendToAll activeGame $ StartValidationMessage updatedAnswers
              resolveRound $ lockAnswers updatedRound
            else
              resolveRound updatedRound
  where
    throwUnexpectedEvent = throwIO . UnexpectedEventError "submit_answers"

-- | Register the given answer ratings and send the results to everyone.
registerRatings :: Map PlayerName (Map Category Bool) -> ActiveGame -> IO ActiveGame
registerRatings ratings (ActiveGame activeGame@ActiveGameState{game}) =
  case getStatus game of
    SGameLoading -> throwUnexpectedEvent "game hasn't started"
    SGameDone -> throwUnexpectedEvent "game is over"
    SGameInProgress -> fromCurrRound game $ \gameRound ->
      case getRoundStatus gameRound of
        SRoundBeingAnswered -> throwUnexpectedEvent "players are still answering"
        SRoundDone -> throwUnexpectedEvent "round is over"
        SRoundBeingValidated -> do
          let updatedRound = finalizeRound ratings gameRound
              updatedGame = setCurrRound updatedRound game
              updatedActiveGame = activeGame { game = updatedGame }

          sendToAll updatedActiveGame $
            EndRoundMessage (getValidatedAnswers updatedRound) (getScores updatedGame) (hasNextRound updatedRound)

          return $ ActiveGame updatedActiveGame
  where
    throwUnexpectedEvent = throwIO . UnexpectedEventError "end_validation"

-- | End the game.
endGame :: ActiveGame -> IO ActiveGame
endGame (ActiveGame activeGame@ActiveGameState{game}) = do
  let activeGame' = activeGame { game = markGameDone game }
  sendToAll activeGame' EndGameMessage
  return $ ActiveGame activeGame'

{- WebSocket helpers -}

receiveJSONData :: FromJSON a => Connection -> IO a
receiveJSONData conn = either fail return . eitherDecode' =<< receiveData conn

sendJSONData :: ToJSON a => Connection -> a -> IO ()
sendJSONData conn = sendTextData conn . encode

sendToAll :: ActiveGameState status -> Message -> IO ()
sendToAll ActiveGameState{playerConns} message =
  forM_ (Map.elems playerConns) $ \conn ->
    sendJSONData conn message
