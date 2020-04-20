{-|
This module only exists because HLint and stylish-haskell can't parse GADTs
with records and quantified type variables.

This module should ONLY contain the definition for ActiveGame so that the rest
of the code can be linted.

https://github.com/ndmitchell/hlint/issues/261
https://github.com/jaspervdj/stylish-haskell/issues/183
-}
{-# LANGUAGE GADTs #-}
{-# LANGUAGE RankNTypes #-}

module CategoriesWithFriends.ActiveGame (ActiveGame(..)) where

import Control.Concurrent (ThreadId)
import Data.Map.Strict (Map)
import Data.Time (UTCTime)
import Network.WebSockets (Connection)

import CategoriesWithFriends.Game (Game)
import CategoriesWithFriends.Game.Player (PlayerName)

data ActiveGame where
  ActiveGame :: forall status.
    { game          :: Game status
    , activePlayers :: Map PlayerName (Connection, ThreadId)
    , startTime     :: UTCTime
    }
    -> ActiveGame
