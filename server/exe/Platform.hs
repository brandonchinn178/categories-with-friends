module Platform
  ( Platform
  ) where

import Control.Concurrent.MVar (MVar)
import Data.Map.Strict (Map)
import Data.Text (Text)

import CategoriesWithFriends (ActiveGame)

-- | The state of the platform, mapping game identifiers to Game.
type Platform = Map Text (MVar ActiveGame)
