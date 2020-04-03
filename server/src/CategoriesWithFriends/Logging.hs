module CategoriesWithFriends.Logging (debugT) where

import Data.Time (getCurrentTime)

debugT :: String -> IO ()
debugT msg = do
  now <- getCurrentTime
  putStrLn $ "[" ++ show now ++ "] [DEBUG] " ++ msg
