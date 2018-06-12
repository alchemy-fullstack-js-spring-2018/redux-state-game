export const NEW_GAME = 'NEW_GAME';
export const NEW_ROUND = 'NEW_ROUND';
export const NEW_GUESS = 'NEW_GUESS';
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
  round: 0,
  guess: '',
});

const copyGameWords = () => gameWords.slice();

export function handleGame(state = newMatch(), {  type, payload  }) {
  switch(type) {
    case NEW_GAME: {
      const gameWords = copyGameWords();
      return {
        ...state,
        wordBank: gameWords
      };
    }
    case NEW_ROUND: {
      const prevWord = payload.word;
      const prevWordBank = state.wordBank;
      return {
        ...state,
        round: payload.round++,
        wordBank: prevWordBank.filter(word => word !== prevWord),
      };
    }
    case NEW_GUESS: {
      const prevGuesses = payload.chosen;
      return {
        ...state,
        chosen: prevGuesses.push(payload.guess)
      };
    }
    default:
      return state;
  }
}