import { NEW_GAME, NEW_ROUND, NEW_GUESS, SAVE_GAME, LOAD_GAME, getGameState, getGuessed, getWins, getWord, getWordBank } from './reducers';
import { gameWords } from '../../constants';

const copyGameWords = () => gameWords.slice();

const getRandomWord = (wordBank) => {
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

export const saveGame = id => {
  return (dispatch, getState) => {
    const state = getState();
    const save = {
      id: id,
      wins: getWins(state),
      wordBank: getWordBank(state),
      word: getWord(state),
      guessed: getGuessed(state),
      timestamp: new Date(),
    };
    
    localStorage.setItem(id, JSON.stringify(save));
    dispatch({
      type: SAVE_GAME,
      payload: id
    });
  };
};

export const loadGame = id => {
  return (dispatch) => {
    const save = JSON.parse(localStorage.getItem(id));

    dispatch({
      type: LOAD_GAME,
      payload: {
        id: id,
        wins: save.wins,
        wordBank: save.wordBank,
        word: save.word,
        guessed: save.guessed
      }
    });
  };
};