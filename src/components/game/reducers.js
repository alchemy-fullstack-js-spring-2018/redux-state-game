export const GUESS = 'GUESS';
export const NEW_GAME = 'NEW_GAME';

export const getGuesses = state => state.guesses;
export const getWord = state => state.word;
export const createWordArray = state => getWord(state).split('');

export function guesses(state = [], { type, payload }) {
  switch(type) {
    case GUESS:
      return [...state, payload.guess];
    case NEW_GAME:
      return [];
    default:
      return state;
  }
}

export function word(state = '', { type, payload }) {
  switch(type) {
    case NEW_GAME:
      return payload;
    default:
      return state;
  }
}