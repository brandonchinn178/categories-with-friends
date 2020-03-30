{-# LANGUAGE DataKinds #-}
{-# LANGUAGE GADTs #-}
{-# LANGUAGE LambdaCase #-}
{-# LANGUAGE NamedFieldPuns #-}
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE RankNTypes #-}
{-# LANGUAGE RecordWildCards #-}

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
      EndValidationEvent{} ->
        undefined
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
setupPlayer playerName playerConn (ActiveGame activeGame@ActiveGameState{..}) = do
  when isPlayerAlreadyConnected $
    throwIO $ CannotJoinGameError "you're already in the game"

  case getStatus game of
    SGameLoading -> do
      let updatedGame = initPlayer playerName game
          updatedActiveGame = activeGame
            { game = updatedGame
            , playerConns = Map.insert playerName playerConn playerConns
            }
      sendToAll updatedActiveGame $
        RefreshPlayerListMessage (getHost updatedGame) (getPlayers updatedGame)
      return $ ActiveGame updatedActiveGame
    SGameDone -> throwIO $ CannotJoinGameError "game is over"
    SGameInProgress -> do
      unless isPlayerInGroup $
        throwIO $ CannotJoinGameError "game already started without you"

      sendJSONData playerConn $ StartRoundMessage $ getCurrRound game
      return $ ActiveGame activeGame
  where
    isPlayerAlreadyConnected = playerName `Map.member` playerConns
    isPlayerInGroup = playerName `elem` getPlayers game

-- | Start a new round in the game.
startGameRound :: ActiveGame -> IO ActiveGame
startGameRound (ActiveGame activeGame@ActiveGameState{game}) = do
  (game', newRound) <- startRound'
  let activeGame' = activeGame { game = game' }
  sendToAll activeGame' $ StartRoundMessage newRound
  return $ ActiveGame activeGame'
  where
    startRound' :: IO (Game 'GameInProgress, GameRound)
    startRound' = case getStatus game of
      SGameDone -> throwUnexpectedEvent "game is done"
      SGameLoading -> startRound game
      SGameInProgress -> do
        when (isRoundDone $ getCurrRound game) $ throwUnexpectedEvent "round isn't over"
        startRound game

    throwUnexpectedEvent = throwIO . UnexpectedEventError "start_round"

-- | Register the given player's answers. If this person was the last person to answer, send
-- everyone the start_validation message.
registerAnswers :: PlayerName -> Map Category Answer -> ActiveGame -> IO ActiveGame
registerAnswers playerName playerAnswers (ActiveGame activeGame@ActiveGameState{game}) =
  case getStatus game of
    SGameLoading -> throwUnexpectedEvent "game hasn't started"
    SGameDone -> throwUnexpectedEvent "game is over"
    SGameInProgress -> do
      let updatedGame = updateCurrRound game $ addPlayerAnswers playerName playerAnswers
          updatedActiveGame = activeGame { game = updatedGame }

      when (haveAllPlayersAnswered game) $
        sendToAll updatedActiveGame $
          StartValidationMessage $ getAnswers (getCurrRound updatedGame)

      pure $ ActiveGame updatedActiveGame
  where
    throwUnexpectedEvent = throwIO . UnexpectedEventError "submit_answers"

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
