import { words } from '../../words';
import { GUESS, NEW_GAME, PLAYER_ADD, RESULTS_LOAD, WIN_ADD, PLAYER_SET } from './reducers';

const getRandomWord = () => {
  const index = Math.floor(Math.random() * words.length);
  return words[index].toUpperCase();
};

export const addGuess = guess => {
  return {
    type: GUESS,
    payload: guess
  };
};

export const initiateGame = name => {
  return {
    type: NEW_GAME,
    payload: {
      name,
      word: getRandomWord()
    }
  };
};

export const setPlayer = name => {
  return (dispatch, getState) => {

    dispatch({ 
      type: PLAYER_SET,
      payload: name
    });

    const { results } = getState();
    if(!results.some(obj => obj.name === name)) {
      dispatch({
        type: PLAYER_ADD,
        payload: name
      });
    }
  };
};

export const recordWin = name => {
  return {
    type: WIN_ADD,
    payload: name
  };
};

export const fetchResults = () => {
  const results = JSON.parse(localStorage.getItem('results')) || [];

  return {
    type: RESULTS_LOAD,
    payload: results
  };
};
