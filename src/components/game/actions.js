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

