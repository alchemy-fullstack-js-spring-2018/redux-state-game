import { NEW_GAME, NEW_ROUND, NEW_GUESS, getGameState, getGuessed } from './reducers';
import { getRandomWord } from './actions';

describe ('Action tests', () => {


  it('gets a random word from gameWords array', () => {
    const wordBank = ['IGLOO', 'ELEPHANT', 'HORSE'];

    const action = getRandomWord(wordBank);
    expect(action).stringMatching(/a@('IGLOO'|'ELEPHANT'|'HORSE')\b/);

  });


});