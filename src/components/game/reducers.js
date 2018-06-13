export const GUESS = 'GUESS';
export const NEW_GAME = 'NEW_GAME';
export const PLAYER_ADD = 'PLAYER_ADD';
export const RESULTS_LOAD = 'RESULTS_LOAD';
export const WIN_ADD = 'WIN_ADD';

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

  const missCount = countMisses(state);
  if(missCount === 6) return GAME_STATE.LOSE;

  return GAME_STATE.PLAYING;
};

export function guesses(state = [], { type, payload }) {
  switch(type) {
    case GUESS:
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
      return payload;
    default:
      return state;
  }
}

export function results(state = [], { type, payload }) {
  switch(type) {
    case PLAYER_ADD:
      return [
        ... state,
        {
          name: payload,
          games: 0,
          wins: 0
        }];
    case RESULTS_LOAD:
      return payload;
    case NEW_GAME:
      return state.map(player => player.name === payload ? { ...player, games: player.games + 1 } : player);
    case WIN_ADD:
      return state.map(player => player.name === payload ? { ...player, wins: player.wins + 1 } : player);
    default:
      return state;
  }
}