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
  = RefreshPlayerListMessage
      { host    :: PlayerName
      , players :: [PlayerName]
      }
    -- ^ send the current host and player list to everyone
  | StartRoundMessage
      { host      :: PlayerName
      , roundInfo :: GameRoundInfo
      }
    -- ^ send information to start a round
  | StartValidationMessage
      { host      :: PlayerName
      , roundInfo :: GameRoundInfo
      , answers   :: AllAnswers
      }
    -- ^ send everyone's answers so the host can validate
  | EndRoundMessage
      { host         :: PlayerName
      , roundInfo    :: GameRoundInfo
      , ratedAnswers :: AllRatedAnswers
      , scores       :: Map PlayerName Int
      , nextRound    :: Bool
      }
    -- ^ send the results of the game so far
  | SendToAllMessage
      { host    :: PlayerName
      , payload :: Value
      }
    -- ^ send a generic payload to everyone
  deriving (Show)

instance ToJSON Message where
  toJSON message =
    let eventEntry = "event" .= messageId message
    in object $ eventEntry : mkMessagePayload message
    where
      mkMessagePayload = \case
        RefreshPlayerListMessage{..} ->
          [ "players" .= players
          , "host" .= host
          ]
        StartRoundMessage{ roundInfo = GameRoundInfo{..}, .. } ->
          [ "host" .= host
          , "round_num" .= roundNum
          , "categories" .= categories
          , "letter" .= letter
          , "end_time" .= formatISO8601 deadline
          ]
        StartValidationMessage{..} ->
          [ "host" .= host
          , "round_num" .= roundNum roundInfo
          , "answers" .= answers
          ]
        EndRoundMessage{..} ->
          [ "host" .= host
          , "round_num" .= roundNum roundInfo
          , "answers" .= ratedAnswers
          , "scores" .= scores
          , "next_round" .= nextRound
          ]
        SendToAllMessage{..} ->
          [ "host" .= host
          , "payload" .= payload
          ]

      messageId :: Message -> String
      messageId = \case
        RefreshPlayerListMessage{} -> "refresh_player_list"
        StartRoundMessage{} -> "start_round"
        StartValidationMessage{} -> "start_validation"
        EndRoundMessage{} -> "end_round"
        SendToAllMessage{} -> "send_to_all"

      formatISO8601 = formatTime defaultTimeLocale (iso8601DateFormat (Just "%H:%M:%S"))
