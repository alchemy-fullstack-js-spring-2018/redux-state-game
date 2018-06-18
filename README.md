# Skyrim Hangman

This web app is a game of hangman using art assets from the game Skyrim! This game is built using React and Redux.

## Getting Started

We have a package.json with a list of dependencies that need to be installed.
simply navigate to the file directory in your terminal or command line tool, and type 

npm i 

to install all necessary node packages.

After you get those you are ready to play Skyrim hangman! Simply run npm start from your command line and the game will be hosted on your localhost server on port 8080. 

If you've ever played hangman before you'll notice you are presented with an empty post that begins to reveal a skyrim wizard non-playable-character, this corresponds with how many incorrect letters you guess when trying to determine what the word is on the scroll below. You have five incorrect guesses until the game is over, and you either win by guessing the word or lose and reveal the entire character.

### Installing

1. Have a Github account to fork our repo

2. fork the repo, and clone it down.

3. npm i all dependencies.

4. get the application up and running by typing npm start into the command line.

5. open your browser window to http://localhost:8080/ 

6. once at port 8080 you should see the game background and assets presented and you can begin playing!

7. after each game, Skyrim hangman keeps track of your wins and losses, and prompts you to continue to the next round. Each round you will be given a brand new word until you exhaust the available wordbank.




## Running the tests

We used Jest to test our React application, We built up our reducers and actions using Test Driven Development (TDD) and used ared-green development process refactoring each test to first fail and then eventually pass.

Check our tests using our script npm test  which will run eslint as well as jest.



## Built With

* [React](https://reactjs.org/) - The web framework used
* [Jest](https://facebook.github.io/jest/) - Testing Code.

## Authors

* **Jen lipton** - [Github](https://github.com/jklipton)

* **Jeffrey Lonergan** - [Github](https://github.com/J3ffcon1)




