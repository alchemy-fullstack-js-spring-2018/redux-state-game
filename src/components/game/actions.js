import { NEW_GAME, NEW_ROUND, NEW_GUESS, getGameState, getGuessed } from './reducers';
// import { gameWords } from '../../constants';

const gameWords = ['igloo', 'elephant', 'skyrim', 'bethesda', 'magic', 'amore', 'tree'];

const copyGameWords = () => gameWords.slice();

export const getRandomWord = (wordBank) => {
  const index = Math.floor(Math.random() * wordBank.length);
  const gameWord = wordBank[index].toUpperCase(); //saving the word 
  wordBank.splice(index, 1); //remove it from the array
  return gameWord; //return the word we picked.
};

export const newGame = () => {
  const gameWords = copyGameWords();
  const gameWord = getRandomWord(gameWords);
    
  return (dispatch) => {
    dispatch({
      type: NEW_GAME,
      payload: {
        wordBank: gameWords,
        word: gameWord,
      }
    });
  };
};

export const newRound = () => {
  const gameWords = copyGameWords();
  const gameWord = getRandomWord(gameWords);
      
  return (dispatch, getState) => {

    const state = getState();
    const roundState = getGameState(state);

    dispatch({
      type: NEW_ROUND,
      payload: {
        gameState: roundState,
        wordBank: gameWords,
        word: gameWord,
      }
    });
  };
};

export const newGuess = letter => {
  return (dispatch, getState) => {
    const state = getState();
    const guessed = getGuessed(state);
    const guess = letter.toUpperCase();

    if(guessed.includes(guess)){
      return;
    } else {
      dispatch({
        type: NEW_GUESS,
        payload: guess
      });
    }
  };
};