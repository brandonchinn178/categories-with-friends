{-# LANGUAGE DataKinds #-}
{-# LANGUAGE LambdaCase #-}
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE RecordWildCards #-}

module Scattergories.Messages
  ( Message(..)
  ) where

import Data.Aeson (ToJSON(..), object, (.=))
import Data.Map.Strict (Map)
import Data.Time (defaultTimeLocale, formatTime, iso8601DateFormat)

import Scattergories.Game.Answer (AllAnswers, AllRatedAnswers)
import Scattergories.Game.Player (PlayerName)
import Scattergories.Game.Round (GameRoundInfo(..))

data Message
  = RefreshPlayerListMessage PlayerName [PlayerName]
    -- ^ send the current host and player list to everyone
  | StartRoundMessage GameRoundInfo
    -- ^ send information to start a round
  | StartValidationMessage AllAnswers
    -- ^ send everyone's answers so the host can validate
  | EndRoundMessage AllRatedAnswers (Map PlayerName Int) Bool
    -- ^ send the results of the game so far

instance Show Message where
  show RefreshPlayerListMessage{} = "refresh_player_list"
  show StartRoundMessage{} = "start_round"
  show StartValidationMessage{} = "start_validation"
  show EndRoundMessage{} = "end_round"

instance ToJSON Message where
  toJSON message =
    let eventEntry = "event" .= show message
    in object $ eventEntry : mkMessagePayload message
    where
      mkMessagePayload = \case
        RefreshPlayerListMessage host players ->
          [ "players" .= players
          , "host" .= host
          ]
        StartRoundMessage GameRoundInfo{..} ->
          [ "round_num" .= roundNum
          , "categories" .= categories
          , "letter" .= letter
          , "end_time" .= formatISO8601 deadline
          ]
        StartValidationMessage answers ->
          [ "answers" .= answers
          ]
        EndRoundMessage answers scores nextRound ->
          [ "answers" .= answers
          , "scores" .= scores
          , "next_round" .= nextRound
          ]

      formatISO8601 = formatTime defaultTimeLocale (iso8601DateFormat (Just "%H:%M:%S"))
