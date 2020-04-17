{-# LANGUAGE DataKinds #-}
{-# LANGUAGE GADTs #-}
{-# LANGUAGE KindSignatures #-}
{-# LANGUAGE LambdaCase #-}
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE RecordWildCards #-}
{-# LANGUAGE TupleSections #-}

module CategoriesWithFriends.Game.Answer
  ( Answer
  , PlayerAnswers
  , AnswerStatus(..)
    -- * Queries
  , AllAnswers
  , getAnswers
  , AllRatedAnswers
  , getRatedAnswers
    -- * Actions
  , initAnswers
  , AnswersForPlayer
  , addAnswers
  , AnswerRating(..)
  , AnswerRatings
  , rateAnswers
  ) where

import Data.Aeson (FromJSON(..), ToJSON(..), object, withObject, (.:), (.=))
import Data.Map.Strict (Map)
import qualified Data.Map.Strict as Map
import Data.Text (Text)

import CategoriesWithFriends.Game.Category (Category)
import CategoriesWithFriends.Game.Player (PlayerName)

type Answer = Text
type PlayerAnswersMap answers = Map PlayerName (Map Category answers)

-- | The answers for players in a round.
newtype PlayerAnswers (status :: AnswerStatus) = PlayerAnswers
  { unPlayerAnswers :: PlayerAnswersMap (AnswerInfo status)
  }

-- | The possible states that player answers can be in.
data AnswerStatus = AnswersAccepted | AnswersLocked | AnswersRated

-- | The representation of a player's answer, determined by the state of the
-- round.
data AnswerInfo (status :: AnswerStatus) where
  MaybeAnswer  :: Maybe Answer -> AnswerInfo 'AnswersAccepted
  LockedAnswer :: Answer -> AnswerInfo 'AnswersLocked
  RatedAnswer  :: Answer -> AnswerRating -> AnswerInfo 'AnswersRated

{- Validation Result -}

data AnswerRating = AnswerRating
  { isValid     :: Bool
  , worthDouble :: Bool
    -- ^ If True, this answer deserves double points, for when an answer is
    -- alliterative
  } deriving (Show)

instance ToJSON AnswerRating where
  toJSON AnswerRating{..} = object
    [ "is_valid" .= isValid
    , "worth_double" .= worthDouble
    ]

instance FromJSON AnswerRating where
  parseJSON = withObject "AnswerRating" $ \o ->
    AnswerRating
      <$> o .: "is_valid"
      <*> o .: "worth_double"

{- Queries -}

type AllAnswers = PlayerAnswersMap Answer

getAnswers :: PlayerAnswers 'AnswersLocked -> AllAnswers
getAnswers = fmap (fmap fromLockedAnswer) . unPlayerAnswers
  where
    fromLockedAnswer :: AnswerInfo 'AnswersLocked -> Answer
    fromLockedAnswer (LockedAnswer answer) = answer

type AllRatedAnswers = Map PlayerName (Map Category (Answer, AnswerRating))

getRatedAnswers :: PlayerAnswers 'AnswersRated -> AllRatedAnswers
getRatedAnswers = fmap (fmap fromRatedAnswer) . unPlayerAnswers
  where
    fromRatedAnswer :: AnswerInfo 'AnswersRated -> (Answer, AnswerRating)
    fromRatedAnswer (RatedAnswer answer result) = (answer, result)

{- Actions -}

-- | Initialize answers for a round with the given players and categories.
initAnswers :: [PlayerName] -> [Category] -> PlayerAnswers 'AnswersAccepted
initAnswers players categories = PlayerAnswers $
  Map.fromList $ map (, emptyAnswers) players
  where
    emptyAnswers = Map.fromList $ map (, MaybeAnswer Nothing) categories

type AnswersForPlayer = Map Category Answer

-- | Add the given answers for the given player.
addAnswers
  :: PlayerName
  -> AnswersForPlayer
  -> PlayerAnswers 'AnswersAccepted
  -> Either (PlayerAnswers 'AnswersAccepted) (PlayerAnswers 'AnswersLocked)
addAnswers playerName answers = finalize . addAnswersForPlayer . unPlayerAnswers
  where
    answerInfo = MaybeAnswer . Just <$> answers
    addAnswersForPlayer = Map.adjust (const answerInfo) playerName

    finalize updatedAnswers =
      case tryLockAnswers updatedAnswers of
        Just lockedAnswers -> Right $ PlayerAnswers lockedAnswers
        Nothing -> Left $ PlayerAnswers updatedAnswers

-- | Try to lock the given answers. Return Just with the locked answers if
-- everyone has submitted answers, otherwise return Nothing.
tryLockAnswers
  :: PlayerAnswersMap (AnswerInfo 'AnswersAccepted)
  -> Maybe (PlayerAnswersMap (AnswerInfo 'AnswersLocked))
tryLockAnswers = traverse tryLockByCategory
  where
    tryLockByCategory = traverse tryLockAnswer

    tryLockAnswer :: AnswerInfo 'AnswersAccepted -> Maybe (AnswerInfo 'AnswersLocked)
    tryLockAnswer = \case
      MaybeAnswer (Just answer) -> Just $ LockedAnswer answer
      MaybeAnswer Nothing -> Nothing

type AnswerRatings = PlayerAnswersMap AnswerRating

-- | Set the given ratings for the players' answers. Errors if an answer for a
-- player and category does not exist in the input.
rateAnswers :: AnswerRatings -> PlayerAnswers 'AnswersLocked -> PlayerAnswers 'AnswersRated
rateAnswers ratings = PlayerAnswers . rateByPlayer . unPlayerAnswers
  where
    rateByPlayer = Map.mapWithKey rateByCategory
    rateByCategory player = Map.mapWithKey (rateAnswer player)

    rateAnswer :: PlayerName -> Category -> AnswerInfo 'AnswersLocked -> AnswerInfo 'AnswersRated
    rateAnswer player category (LockedAnswer answer) =
      case Map.lookup category =<< Map.lookup player ratings of
        Nothing -> error $ "Answer for " ++ show category ++ " by " ++ show player ++ " does not have a rating"
        Just result -> RatedAnswer answer result
