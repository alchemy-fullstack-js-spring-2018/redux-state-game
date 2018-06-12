export const NEW_GAME = 'NEW_GAME';
export const NEW_ROUND = 'NEW_ROUND';

export const GAME_STATE = {
  PLAYING: 'PLAYING',
  WIN: 'WIN',
  LOSE: 'LOSE',
};

export function gameChange(state, {  type, payload  }) {
  switch(type) {
    case NEW_GAME: {
      return {
        ...state,
        limbCount: 0,
        word: '',
        chosen: '',
        round: 0,
        prevWords: [],
      };
    }
    case NEW_ROUND: {
      const usedWords = payload.prevWord;
      return {
        ...state,
        limbCount: 0,
        word: '',
        chosen: '',
        round: payload.round++,
        prevWords: usedWords.push(payload.word)
      };
    }
    default:
      return state;
  }
}