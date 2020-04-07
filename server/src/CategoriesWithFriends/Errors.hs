{-# LANGUAGE DeriveAnyClass #-}
{-# LANGUAGE LambdaCase #-}
{-# LANGUAGE OverloadedStrings #-}

module CategoriesWithFriends.Errors
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
  deriving (Show, Exception)

instance ToJSON ServerError where
  toJSON err =
    let errorEntry = "error" .= errorId err
    in object $ errorEntry : mkErrorPayload err
    where
      mkErrorPayload = \case
        NotHostError -> []
        CannotJoinGameError msg ->
          [ "message" .= msg
          ]
        UnexpectedEventError event msg ->
          [ "event" .= event
          , "message" .= msg
          ]
        UnexpectedServerError e ->
          [ "message" .= displayException e
          ]

      errorId :: ServerError -> String
      errorId = \case
        NotHostError -> "not_host"
        CannotJoinGameError{} -> "cannot_join_game"
        UnexpectedEventError{} -> "unexpected_event"
        UnexpectedServerError{} -> "server_error"
