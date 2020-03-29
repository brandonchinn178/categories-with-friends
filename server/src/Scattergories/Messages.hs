{-# LANGUAGE LambdaCase #-}
{-# LANGUAGE OverloadedStrings #-}

module Scattergories.Messages
  ( Message(..)
  , mkMessage
  ) where

import Data.Aeson (Value(..), object, (.=))

import Scattergories.Game (PlayerName)

data Message
  = RefreshPlayerListMessage PlayerName [PlayerName]
    -- ^ send the current host and player list to everyone

instance Show Message where
  show RefreshPlayerListMessage{} = "refresh_player_list"

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
