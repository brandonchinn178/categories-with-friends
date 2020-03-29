{-# LANGUAGE LambdaCase #-}
{-# LANGUAGE OverloadedStrings #-}

module Scattergories.Errors
  ( ServerError(..)
  ) where

import Control.Exception (Exception, SomeException, displayException)
import Data.Aeson (ToJSON(..), object, (.=))
import Data.Text (Text)

data ServerError
  = NotHostError
  | CannotJoinGameError Text
  | UnexpectedEventError Text Text
  | UnexpectedServerError SomeException

instance Show ServerError where
  show NotHostError = "not_host"
  show CannotJoinGameError{} = "cannot_join_game"
  show UnexpectedEventError{} = "unexpected_event"
  show UnexpectedServerError{} = "server_error"

instance Exception ServerError

instance ToJSON ServerError where
  toJSON err =
    let errorEntry = "error" .= show err
    in object $ errorEntry : mkErrorPayload err
    where
      mkErrorPayload = \case
        NotHostError -> []
        CannotJoinGameError msg -> [ "message" .= msg ]
        UnexpectedEventError event msg ->
          [ "event" .= event
          , "message" .= msg
          ]
        UnexpectedServerError e -> [ "message" .= displayException e ]
