import { words } from '../../words';
import { GUESS, NEW_GAME } from './reducers';

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

export const initiateGame = () => {
  return {
    type: NEW_GAME,
    payload: getRandomWord()
  };
};