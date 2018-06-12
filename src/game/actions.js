import { GUESS } from './reducers';

export const addGuess = guess => {
  return {
    type: GUESS,
    payload: guess
  };
};
