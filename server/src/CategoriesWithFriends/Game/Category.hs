{-# LANGUAGE TemplateHaskell #-}

module CategoriesWithFriends.Game.Category
  ( Category
  , allCategories
  ) where

import Data.FileEmbed (embedStringFile)
import Data.Text (Text)
import qualified Data.Text as Text

type Category = Text

allCategories :: [Category]
allCategories = Text.lines $(embedStringFile "../data/categories.txt")
