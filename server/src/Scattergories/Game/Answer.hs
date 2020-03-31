{-# LANGUAGE DataKinds #-}
{-# LANGUAGE GADTs #-}
{-# LANGUAGE KindSignatures #-}
{-# LANGUAGE LambdaCase #-}
{-# LANGUAGE TupleSections #-}

module Scattergories.Game.Answer
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
  , tryLockAnswers
  , AnswerRatings
  , rateAnswers
  ) where

import Data.Map.Strict (Map)
import qualified Data.Map.Strict as Map
import Data.Text (Text)

type PlayerName = Text
type Category = Text
type Answer = Text

-- | The answers for players in a round.
newtype PlayerAnswers (status :: AnswerStatus) = PlayerAnswers
  { unPlayerAnswers :: Map PlayerName (Map Category (AnswerInfo status))
  }

-- | The possible states that player answers can be in.
data AnswerStatus = AnswersAccepted | AnswersLocked | AnswersRated

-- | The representation of a player's answer, determined by the state of the
-- round.
data AnswerInfo (status :: AnswerStatus) where
  MaybeAnswer  :: Maybe Answer -> AnswerInfo 'AnswersAccepted
  LockedAnswer :: Answer -> AnswerInfo 'AnswersLocked
  RatedAnswer  :: Answer -> Bool -> AnswerInfo 'AnswersRated

{- Queries -}

type AllAnswers = Map PlayerName (Map Category Answer)

getAnswers :: PlayerAnswers 'AnswersLocked -> AllAnswers
getAnswers = fmap (fmap fromLockedAnswer) . unPlayerAnswers
  where
    fromLockedAnswer :: AnswerInfo 'AnswersLocked -> Answer
    fromLockedAnswer (LockedAnswer answer) = answer

type AllRatedAnswers = Map PlayerName (Map Category (Answer, Bool))

getRatedAnswers :: PlayerAnswers 'AnswersRated -> AllRatedAnswers
getRatedAnswers = fmap (fmap fromRatedAnswer) . unPlayerAnswers
  where
    fromRatedAnswer :: AnswerInfo 'AnswersRated -> (Answer, Bool)
    fromRatedAnswer (RatedAnswer answer isValid) = (answer, isValid)

{- Actions -}

-- | Initialize answers for a round with the given players and categories.
initAnswers :: [PlayerName] -> [Category] -> PlayerAnswers 'AnswersAccepted
initAnswers players categories = PlayerAnswers $
  Map.fromList $ map (, emptyAnswers) players
  where
    emptyAnswers = Map.fromList $ map (, MaybeAnswer Nothing) categories

type AnswersForPlayer = Map Category Answer

-- | Add the given answers for the given player.
addAnswers :: PlayerName -> AnswersForPlayer -> PlayerAnswers 'AnswersAccepted -> PlayerAnswers 'AnswersAccepted
addAnswers playerName answers = PlayerAnswers . addAnswersForPlayer . unPlayerAnswers
  where
    answerInfo = MaybeAnswer . Just <$> answers
    addAnswersForPlayer = Map.adjust (const answerInfo) playerName

-- | Try to lock the given answers. Return Just with the locked answers if
-- everyone has submitted answers, otherwise return Nothing.
tryLockAnswers :: PlayerAnswers 'AnswersAccepted -> Maybe (PlayerAnswers 'AnswersLocked)
tryLockAnswers = fmap PlayerAnswers . tryLockByPlayer . unPlayerAnswers
  where
    tryLockByPlayer = traverse tryLockByCategory
    tryLockByCategory = traverse tryLockAnswer

    tryLockAnswer :: AnswerInfo 'AnswersAccepted -> Maybe (AnswerInfo 'AnswersLocked)
    tryLockAnswer = \case
      MaybeAnswer (Just answer) -> Just $ LockedAnswer answer
      MaybeAnswer Nothing -> Nothing

type AnswerRatings = Map PlayerName (Map Category Bool)

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
        Just rating -> RatedAnswer answer rating
