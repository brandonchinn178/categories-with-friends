{-# LANGUAGE LambdaCase #-}
{-# LANGUAGE OverloadedStrings #-}

module Scattergories.Errors
  ( ServerError(..)
  , mkError
  ) where

import Control.Exception (Exception, SomeException, displayException)
import Data.Aeson (Value, object, (.=))

data ServerError
  = NonHostStartedRoundError
  | UnexpectedServerError SomeException

instance Show ServerError where
  show NonHostStartedRoundError = "non_host_started_round"
  show UnexpectedServerError{} = "server_error"

instance Exception ServerError

mkError :: ServerError -> Value
mkError err =
  let errorEntry = "error" .= show err
  in object $ errorEntry : mkErrorPayload err
  where
    mkErrorPayload = \case
      NonHostStartedRoundError -> []
      UnexpectedServerError e -> [ "message" .= displayException e ]
