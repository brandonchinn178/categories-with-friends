{-# LANGUAGE LambdaCase #-}
{-# LANGUAGE OverloadedStrings #-}

module Scattergories.Messages
  ( Message(..)
  , mkMessage
  ) where

import Data.Aeson (Value(..), object, (.=))

import Scattergories.Game (Game, getHost, getPlayers)

data Message
  = RefreshPlayerListMessage
    -- ^ send the current player list to everyone

instance Show Message where
  show RefreshPlayerListMessage = "refresh_player_list"

mkMessage :: Game -> Message -> Value
mkMessage game message =
  let eventEntry = "event" .= show message
  in object $ eventEntry : mkMessagePayload message
  where
    mkMessagePayload = \case
      RefreshPlayerListMessage ->
        [ "players" .= getPlayers game
        , "host" .= getHost game
        ]
