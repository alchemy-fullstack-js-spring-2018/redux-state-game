Player and Game History
===

Track player and keep a history of game results

* Use React Router to create separate pages as needed:
    * Player "registration" info before starting (_OR_ you can prompt after game for initials or name)
    * Game page to play the game
    * Game History that shows scores/results
        * Or you can just track top x scores
  
* Create additional reducers to hold need information about:
    * player
    * game results or top scores
        * Array of game results from each played game
    
* Store info
    * At a minimum store game history in local storage
        * Action creator saves to local storage when sending update to game history
        * Need LOAD action at start
    * Make a backend server
        * Action create saves to server on update of game history
        * LOAD action for initial game history/top scores

* Include tests for new reducers and actions

## Rubric **10pts**

* New tested reducers and actions  **4pts**
* Player or Initials **2pts**
* Game History/Scoreboard **3pts**
* Idomatic React/Redux **1pts**

