export const NEW_GAME = 'NEW_GAME';
export const NEW_ROUND = 'NEW_ROUND';
export const NEW_GUESS = 'NEW_GUESS';
export const TALLY_ROUND = 'TALLY_ROUND';

import { gameWords } from '../../words';

export const getWord = state => state.word;

export const GAME_STATE = {
  BlANK: 'BlANK',
  PLAYING: 'PLAYING',
  WIN: 'WIN',
  LOSE: 'LOSE',
};

export const newMatch = () => ({
  limbCount: 0,
  word: '',
  chosen: '',
  guess: '',
});

export function handleGame(state = newMatch(), {  type, payload  }) {
  switch(type) {
    case NEW_GAME: {
           return {
        ...state,
        wordBank: payload.wordBank,
        word: payload.word,
      };
    }
    case NEW_ROUND: {
      return {
        ...state,
        wordBank: payload.wordBank,
        word: payload.word, 
      };
    }
    case NEW_GUESS: {
      return {
        ...state,
        chosen: payload,
      };
    }
    default:
      return state;
  }
}
export const initMatch = () => ({
  [GAME_STATE.WIN]: 0,
  [GAME_STATE.LOSE]: 0,
});

export function tally (state = initMatch(), { type, payload }) {
  switch(type) {
    case TALLY_ROUND: 
      return {
        ...state,
        [payload]: state[payload] + 1 //adding one to initMatch state.
      };
      default:
        return state;
  }
}