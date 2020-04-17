{-# LANGUAGE DataKinds #-}
{-# LANGUAGE LambdaCase #-}
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE RecordWildCards #-}

module CategoriesWithFriends.Messages
  ( Message(..)
  ) where

import Data.Aeson (ToJSON(..), Value, object, (.=))
import Data.Map.Strict (Map)
import Data.Time (defaultTimeLocale, formatTime, iso8601DateFormat)

import CategoriesWithFriends.Game.Answer (AllAnswers, AllRatedAnswers)
import CategoriesWithFriends.Game.Player (PlayerName)
import CategoriesWithFriends.Game.Round (GameRoundInfo(..))

data Message
  = RefreshPlayerListMessage PlayerName [PlayerName]
    -- ^ send the current host and player list to everyone
  | StartRoundMessage GameRoundInfo
    -- ^ send information to start a round
  | StartValidationMessage GameRoundInfo AllAnswers
    -- ^ send everyone's answers so the host can validate
  | EndRoundMessage GameRoundInfo AllRatedAnswers (Map PlayerName Int) Bool
    -- ^ send the results of the game so far
  | SendToAllMessage Value
  deriving (Show)

instance ToJSON Message where
  toJSON message =
    let eventEntry = "event" .= messageId message
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
        StartValidationMessage info answers ->
          [ "round_num" .= roundNum info
          , "answers" .= answers
          ]
        EndRoundMessage info answers scores nextRound ->
          [ "round_num" .= roundNum info
          , "answers" .= answers
          , "scores" .= scores
          , "next_round" .= nextRound
          ]
        SendToAllMessage payload ->
          [ "payload" .= payload
          ]

      messageId :: Message -> String
      messageId = \case
        RefreshPlayerListMessage{} -> "refresh_player_list"
        StartRoundMessage{} -> "start_round"
        StartValidationMessage{} -> "start_validation"
        EndRoundMessage{} -> "end_round"
        SendToAllMessage{} -> "send_to_all"

      formatISO8601 = formatTime defaultTimeLocale (iso8601DateFormat (Just "%H:%M:%S"))
