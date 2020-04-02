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

module Scattergories.ActiveGame (ActiveGame(..)) where

import Data.Map.Strict (Map)
import Data.Time (UTCTime)
import Network.WebSockets (Connection)

import Scattergories.Game (Game)
import Scattergories.Game.Player (PlayerName)

data ActiveGame where
  ActiveGame :: forall status.
    { game        :: Game status
    , playerConns :: Map PlayerName Connection
    , startTime   :: UTCTime
    }
    -> ActiveGame
