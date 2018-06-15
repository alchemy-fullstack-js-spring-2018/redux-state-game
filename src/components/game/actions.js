import { NEW_GAME, NEW_ROUND, NEW_GUESS, SAVE_GAME, LOAD_GAME, getGameState, getGuessed, getWins, getWord, getWordBank } from './reducers';
import { gameWords } from '../../constants';

const getRandomBank = () => {
  const gameWordsCopy = gameWords.slice();
  const shuffleArray = (array) => {
    for(let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // eslint-disable-line no-param-reassign
    }
  };
  shuffleArray(gameWordsCopy);
  return gameWordsCopy.slice(0, 9);
};

export const getRandomWord = (wordBank) => {
  const index = Math.floor(Math.random() * wordBank.length);
  const gameWord = wordBank[index].toUpperCase(); //saving the word 
  wordBank.splice(index, 1); //remove it from the array
  return gameWord; //return the word we picked.
};

export const newGame = () => {
  const gameBank = getRandomBank();
  const gameWord = getRandomWord(gameBank);
    
  return (dispatch) => {
    dispatch({
      type: NEW_GAME,
      payload: {
        wordBank: gameBank,
        word: gameWord,
      }
    });
  };
};

export const newRound = () => {
  const gameBank = getRandomBank();
  const gameWord = getRandomWord(gameBank);
      
  return (dispatch, getState) => {

    const state = getState();
    const roundState = getGameState(state);

    dispatch({
      type: NEW_ROUND,
      payload: {
        gameState: roundState,
        wordBank: gameBank,
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
    const newSave = {
      id: id,
      wins: getWins(state),
      wordBank: getWordBank(state),
      word: getWord(state),
      guessed: getGuessed(state),
      timestamp: new Date(),
    };

    let saves = [];
    if(localStorage.getItem('saves') === null) {
      saves.push(newSave);
      localStorage.setItem('saves', JSON.stringify(saves));
    } else {
      saves = JSON.parse(localStorage.getItem('saves'));
      saves.push(newSave);
      localStorage.setItem('saves', JSON.stringify(saves));
    }

    dispatch({
      type: SAVE_GAME,
      payload: id
    });
  };
};

export const loadGame = id => {
  return (dispatch) => {
    const saves = JSON.parse(localStorage.getItem('saves'));
    const save = saves.find(save => save.id === id);

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