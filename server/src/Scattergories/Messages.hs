{-# LANGUAGE LambdaCase #-}
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE RecordWildCards #-}

module Scattergories.Messages
  ( Message(..)
  , mkMessage
  ) where

import Data.Aeson (Value(..), object, (.=))

import Scattergories.Game (GameRound(..), PlayerName)

data Message
  = RefreshPlayerListMessage PlayerName [PlayerName]
    -- ^ send the current host and player list to everyone
  | StartRoundMessage GameRound
    -- ^ send information to start a round
  | EndGameMessage
    -- ^ tell everyone to end their games

instance Show Message where
  show RefreshPlayerListMessage{} = "refresh_player_list"
  show StartRoundMessage{} = "start_round"
  show EndGameMessage = "end_game"

mkMessage :: Message -> Value
mkMessage message =
  let eventEntry = "event" .= show message
  in object $ eventEntry : mkMessagePayload message
  where
    mkMessagePayload = \case
      RefreshPlayerListMessage host players ->
        [ "players" .= players
        , "host" .= host
        ]
      StartRoundMessage GameRound{..} ->
        [ "round_num" .= roundNum
        , "categories" .= categories
        , "letter" .= letter
        ]
      EndGameMessage -> []
