export const NEW_GAME = 'NEW_GAME';
export const NEW_ROUND = 'NEW_ROUND';
export const NEW_GUESS = 'NEW_GUESS';
export const SAVE_GAME = 'SAVE_GAME';
export const LOAD_GAME = 'LOAD_GAME';

export const getWord = state => state.word;
export const getWordBank = state => state.wordBank;
export const createWordArray = state => getWord(state).split('');
export const getGuessed = state => state.guessed;
export const getWins = state => state.tally.WIN;

export const GAME_STATE = {
  BLANK: 'BLANK',
  PLAYING: 'PLAYING',
  WIN: 'WIN',
  LOSE: 'LOSE',
};

export const getGameState = state => {
  const word = getWord(state);
  
  if(!word) return GAME_STATE.BLANK;

  const misses = findMisses(state);
  if(misses.length >= 6) return GAME_STATE.LOSE;

  const wordArray = createWordArray(state);
  const guessed = getGuessed(state);
  if(wordArray.every(letter => guessed.includes(letter))) return GAME_STATE.WIN;
  
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
    case NEW_ROUND:
      return [];
    case LOAD_GAME:
      return payload.guessed;
    default:
      return state;
  }
}

export function word(state = '', { type, payload }) {
  switch(type) {
    case NEW_GAME:
      return payload.word;
    case NEW_ROUND:
      return payload.word;
    case LOAD_GAME:
      return payload.word;
    default:
      return state;
  }
}

export function wordBank(state = [], { type, payload }) {
  switch(type) {
    case NEW_GAME:
      return payload.wordBank;
    case NEW_ROUND:
      return payload.wordBank;
    case LOAD_GAME:
      return payload.wordBank;
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
        [payload.gameState]: state[payload.gameState] + 1 //adding one to initMatch state.
      };
    case LOAD_GAME:
      return {
        WIN: payload.wins,
        LOSE: (10 - payload.wordBank.length) - payload.wins,
      };
    default:
      return state;
  }
}

const noStore = () => ({
  stored: false,
  name: ''
});

export function player(state = noStore(), { type, payload }) {
  switch(type) {
    case SAVE_GAME:
      return {
        stored: true,
        id: payload.id
      };
    case LOAD_GAME:
      return {
        stored: true,
        id: payload.id
      };
    default:
      return state;
  }
}