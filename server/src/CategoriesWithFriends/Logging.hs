module CategoriesWithFriends.Logging
  ( debugT
  , errorT
  ) where

import Data.Time (getCurrentTime)

debugT :: String -> IO ()
debugT = logT "DEBUG"

errorT :: String -> IO ()
errorT = logT "ERROR"

logT :: String -> String -> IO ()
logT level msg = do
  now <- getCurrentTime
  putStrLn $ "[" ++ show now ++ "] [" ++ level ++ "] " ++ msg
