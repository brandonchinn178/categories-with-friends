{-# LANGUAGE LambdaCase #-}
{-# LANGUAGE OverloadedStrings #-}

module Scattergories.Errors
  ( ServerError(..)
  , mkError
  ) where

import Control.Exception (Exception, SomeException, displayException)
import Data.Aeson (Value, object, (.=))
import Data.Text (Text)

data ServerError
  = NotHostError
  | CannotJoinGameError Text
  | UnexpectedStartRoundError Text
  | UnexpectedServerError SomeException

instance Show ServerError where
  show NotHostError = "not_host"
  show CannotJoinGameError{} = "cannot_join_game"
  show UnexpectedStartRoundError{} = "unexpected_start_round"
  show UnexpectedServerError{} = "server_error"

instance Exception ServerError

mkError :: ServerError -> Value
mkError err =
  let errorEntry = "error" .= show err
  in object $ errorEntry : mkErrorPayload err
  where
    mkErrorPayload = \case
      NotHostError -> []
      CannotJoinGameError msg -> [ "message" .= msg ]
      UnexpectedStartRoundError msg -> [ "message" .= msg ]
      UnexpectedServerError e -> [ "message" .= displayException e ]
