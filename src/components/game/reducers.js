export const NEW_GAME = 'NEW_GAME';
export const NEW_ROUND = 'NEW_ROUND';
export const NEW_GUESS = 'NEW_GUESS';

export const getWord = state => state.word;
export const createWordArray = state => getWord(state).split('');
export const getChosen = state => state.chosen;
export const getLimbCount = state => state.limbCount;
export const getGuessed = state => state.guessed;

export const GAME_STATE = {
  BlANK: 'BLANK',
  PLAYING: 'PLAYING',
  WIN: 'WIN',
  LOSE: 'LOSE',
};

export const getGameState = state => {
  const word = getWord(state);
  
  if(!word) return GAME_STATE.BLANK;

  const limbCount = getLimbCount(state);
  if(limbCount >= 6) return GAME_STATE.LOSE;

  const wordArray = createWordArray(state);
  const chosen = getChosen(state);
  if(wordArray.every(letter => chosen.includes(letter))) return GAME_STATE.WIN;
  
  return GAME_STATE.PLAYING;
};

export const findHits = state => {
  const guessed = getGuessed(state);
  const word = getWord(state);
  return guessed.filter(letter => word.includes(letter));
};
  
export const findMisses = state => {
  const guessed = getGuessed(state);
  const word = getWord(state);
  return guessed.filter(letter => !word.includes(letter));
};

export const countMisses = state => findMisses(state).length;

export function guessed(state = [], { type, payload }) {
  switch(type) {
    case NEW_GUESS:
      return [...state, payload];
    case NEW_GAME:
      return [];
    default:
      return state;
  }
}

export function word(state = '', { type, payload }) {
  switch(type) {
    case NEW_GAME:
      return {
        ...state,
        word: payload.word
      };
    case NEW_ROUND:
      return {
        ...state,
        word: payload.word
      };
    default:
      return state;
  }
}

export function wordBank(state = [], { type, payload }) {
  switch(type) {
    case NEW_GAME:
      return {
        ...state,
        wordBank: payload.wordBank,
      };
    case NEW_ROUND:
      return {
        ...state,
        wordBank: payload.wordBank,
      };
    default:
      return state;
  }
}

export const initMatch = () => ({
  [GAME_STATE.WIN]: 0,
  [GAME_STATE.LOSE]: 0,
});
  
export function tally(state = initMatch(), { type, payload }) {
  switch(type) {
    case NEW_ROUND: 
      return {
        ...state,
        [payload]: state[payload] + 1 //adding one to initMatch state.
      };
    default:
      return state;
  }
}