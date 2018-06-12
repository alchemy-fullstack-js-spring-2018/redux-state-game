import { NEW_GAME, NEW_ROUND, NEW_GUESS, TALLY_ROUND } from './reducers';
import { gameWords } from '../../words';

const copyGameWords = () => gameWords.slice();

const getRandomWord = (wordBank) => {
  const index = Math.floor(Math.random() * wordBank.length);
  const gameWord = wordBank[index].toUpperCase(); //saving the word 
  wordBank.splice(index, 1); //remove it from the array
  return gameWord; //return the word we picked.
};

export const initGame = () => {
  const gameWords = copyGameWords();
  const gameWord = getRandomWord(gameWords);
  
  return {
    type: NEW_GAME,
    payload: {
      wordBank: gameWords,
      word: gameWord,
    }
  }
}

export const initRound = (wordBank, result) => {
  const gameWords = wordBank;
  const gameWord = getRandomWord(gameWords);
  
  dispatch({
    type: TALLY_ROUND,
    payload: result,
  });

  dispatch ({
    type: NEW_ROUND,
    payload: {
      wordBank: gameWords,
      word: gameWord,
    }
  });
}

export const makeGuess = (letter, chosen) => {
  const newChosen = chosen.push(letter);

  return {
    type: NEW_GUESS,
    payload: newChosen,
  }
} 