{-# LANGUAGE LambdaCase #-}
{-# LANGUAGE OverloadedStrings #-}

module Scattergories.Messages
  ( Message(..)
  , mkMessage
  ) where

import Data.Aeson (Value(..), object, (.=))

import Scattergories.Game (Game, getHost, getPlayers)

data Message
  = RefreshPlayerList
    -- ^ send the current player list to everyone

instance Show Message where
  show RefreshPlayerList = "refresh_player_list"

mkMessage :: Game -> Message -> Value
mkMessage game message =
  let eventEntry = "event" .= show message
  in object $ eventEntry : mkMessagePayload message
  where
    mkMessagePayload = \case
      RefreshPlayerList ->
        [ "players" .= getPlayers game
        , "host" .= getHost game
        ]
