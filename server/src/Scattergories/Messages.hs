module Scattergories.Messages
  ( Message(..)
  ) where

data Message
  = RefreshPlayerList
    -- ^ send the current player list to everyone
