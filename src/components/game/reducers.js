export const GUESS = 'GUESS';
export const NEW_GAME = 'NEW_GAME';

export const GAME_STATE = {
  EMPTY: 'EMPTY',
  PLAYING: 'PLAYING',
  WIN: 'WIN',
  LOSE: 'LOSE'
};

export const getGuesses = state => state.guesses;
export const getWord = state => state.word;
export const createWordArray = state => getWord(state).split('');

export const findHits = state => {
  const guesses = getGuesses(state);
  const word = getWord(state);
  return guesses.filter(letter => word.includes(letter));
};

export const findMisses = state => {
  const guesses = getGuesses(state);
  const word = getWord(state);
  return guesses.filter(letter => !word.includes(letter));
};

export const countMisses = state => findMisses(state).length;

export const getGameState = state => {
  const guesses = getGuesses(state);
  const word = getWord(state);
  
  if(!word) return GAME_STATE.EMPTY;
  const wordArray = createWordArray(state);

  if(wordArray.every(letter => guesses.includes(letter))) return GAME_STATE.WIN;

};

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