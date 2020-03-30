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
import qualified Data.Set as Set
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

-- | Update the ActiveGameState inside an ActiveGame.
--
-- Unfortunately, it would be nice to have the function return
-- IO (forall newStatus. ActiveGameState newStatus), but GHC doesn't support impredicative types
-- yet, so we have to force the function to wrap ActiveGame explicitly.
updateActiveGame :: MVar ActiveGame -> (forall oldStatus. ActiveGameState oldStatus -> IO ActiveGame) -> IO ()
updateActiveGame activeGameVar f = modifyMVar_ activeGameVar $ \(ActiveGame activeGame) -> f activeGame

initGameWithHost :: PlayerName -> ActiveGame
initGameWithHost host = ActiveGame $
  ActiveGameState
    { game = createGame host
    , playerConns = Map.empty
    }

servePlayer :: MVar ActiveGame -> PlayerName -> Connection -> IO ()
servePlayer activeGameVar playerName playerConn = do
  updateGame $ resolve . setupPlayer playerName playerConn

  withPingThread playerConn pingDelay postPing $ runLoop $
    receiveJSONData playerConn >>= \case
      StartRoundEvent ->
        updateGameOnlyHost $ resolve . startGameRound
      SubmitAnswersEvent playerAnswers ->
        updateGame $ resolve . registerAnswers playerName playerAnswers
      EndValidationEvent{} ->
        undefined
      EndGameEvent ->
        updateGameOnlyHost $ resolve . endGame
  where
    pingDelay = 30 -- seconds
    postPing = return ()

    -- continually run the given action, until a CloseRequest exception is thrown
    -- any other errors are sent to the client
    runLoop m = try m >>= \case
      Left e ->
        case fromException e of
          Just CloseRequest{} ->
            updateGame $ \activeGame -> pure $ ActiveGame
              activeGame
                { playerConns = Map.delete playerName (playerConns activeGame)
                }
          _ -> do
            let serverErr = fromMaybe (UnexpectedServerError e) (fromException e)
            sendJSONData playerConn serverErr
            runLoop m
      Right _ -> runLoop m

    updateGameOnlyHost :: (forall oldStatus. ActiveGameState oldStatus -> IO ActiveGame) -> IO ()
    updateGameOnlyHost f = updateGame $ \activeGame -> do
      unless (getHost (game activeGame) == playerName) $ throwIO NotHostError
      f activeGame

    updateGame :: (forall oldStatus. ActiveGameState oldStatus -> IO ActiveGame) -> IO ()
    updateGame = updateActiveGame activeGameVar

    resolve :: IO (ActiveGameState newStatus) -> IO ActiveGame
    resolve = fmap ActiveGame

{- Game mechanics -}

-- | If the game hasn't started yet, add the given player to the game and notify everyone of the
-- new arrival.
setupPlayer :: PlayerName -> Connection -> ActiveGameState status -> IO (ActiveGameState status)
setupPlayer playerName playerConn activeGame@ActiveGameState{..} = do
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
        RefreshPlayerListMessage (getHost updatedGame) (Set.toList $ getPlayers updatedGame)
      return updatedActiveGame
    SGameDone -> throwIO $ CannotJoinGameError "game is over"
    SGameInProgress -> do
      unless isPlayerInGroup $
        throwIO $ CannotJoinGameError "game already started without you"

      sendJSONData playerConn $ StartRoundMessage $ getCurrRound game
      return activeGame
  where
    isPlayerAlreadyConnected = playerName `Map.member` playerConns
    isPlayerInGroup = playerName `Set.member` getPlayers game

-- | Start a new round in the game.
startGameRound :: ActiveGameState status -> IO (ActiveGameState 'GameInProgress)
startGameRound activeGame@ActiveGameState{game} = do
  (game', newRound) <- case getStatus game of
    SGameDone -> throwUnexpectedEvent "game is done"
    SGameLoading -> startRound game
    SGameInProgress -> do
      when (isRoundDone $ getCurrRound game) $ throwUnexpectedEvent "round isn't over"
      startRound game

  let activeGame' = activeGame { game = game' }
  sendToAll activeGame' $ StartRoundMessage newRound
  return activeGame'
  where
    throwUnexpectedEvent = throwIO . UnexpectedEventError "start_round"

-- | Register the given player's answers. If this person was the last person to answer, send
-- everyone the start_validation message.
registerAnswers :: PlayerName -> Map Category Answer -> ActiveGameState status -> IO (ActiveGameState 'GameInProgress)
registerAnswers playerName playerAnswers activeGame@ActiveGameState{game} =
  case getStatus game of
    SGameLoading -> throwUnexpectedEvent "game hasn't started"
    SGameDone -> throwUnexpectedEvent "game is over"
    SGameInProgress -> do
      let updatedGame = updateCurrRound game $ addPlayerAnswers playerName playerAnswers
          updatedActiveGame = activeGame { game = updatedGame }

      when (haveAllPlayersAnswered game) $
        sendToAll updatedActiveGame $
          StartValidationMessage $ getAnswers (getCurrRound updatedGame)

      pure updatedActiveGame
  where
    throwUnexpectedEvent = throwIO . UnexpectedEventError "submit_answers"

-- | End the game.
endGame :: ActiveGameState status -> IO (ActiveGameState 'GameDone)
endGame activeGame@ActiveGameState{game} = do
  let activeGame' = activeGame { game = markGameDone game }
  sendToAll activeGame' EndGameMessage
  return activeGame'

{- WebSocket helpers -}

receiveJSONData :: FromJSON a => Connection -> IO a
receiveJSONData conn = either fail return . eitherDecode' =<< receiveData conn

sendJSONData :: ToJSON a => Connection -> a -> IO ()
sendJSONData conn = sendTextData conn . encode

sendToAll :: ActiveGameState status -> Message -> IO ()
sendToAll ActiveGameState{playerConns} message =
  forM_ (Map.elems playerConns) $ \conn ->
    sendJSONData conn message
