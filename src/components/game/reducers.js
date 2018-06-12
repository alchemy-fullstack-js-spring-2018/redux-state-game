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
  guess: '',
});

const copyGameWords = () => gameWords.slice();

const getRandomWord = (wordBank) => {
  const index = Math.floor(Math.random() * wordBank.length);
  const gameWord = wordBank[index].toUpperCase(); //saving the word 
  wordBank.splice(index, 1); //remove it from the array
  return gameWord; //return the word we picked.
};

export function handleGame(state = newMatch(), {  type, payload  }) {
  switch(type) {
    case NEW_GAME: {
      const gameWords = copyGameWords();
      const gameWord = getRandomWord(gameWords);
      return {
        ...state,
        wordBank: gameWords,
        word: gameWord,
      };
    }
    case NEW_ROUND: {
      const prevWordBank = state.wordBank;
      const gameWord = getRandomWord(prevWordBank); //get random word from previous word bank.
      return {
        ...state,
        wordBank: prevWordBank,
        word: gameWord, 
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