import { getGameState, newMatch, handleGame, NEW_GAME, NEW_ROUND, NEW_GUESS, TALLY_ROUND, createWordArray, GAME_STATE } from './reducers';

const firstGameState = {
    limbCount: 2,
    word: 'solatious',
    chosen: 'solatious',
}

const secondGameState = {
    limbCount: 6,
    word: 'sassy',
    chosen: 'sassy',
}

const thirdGameState = {
    limbCount: 5,
    word: 'brassy',
    chosen: 'brass',
}
describe(' testing reducer function getGameState', () => {

it('has a default value of an object with properties', () => {
    const state = newMatch(undefined, {});
    expect(state).toEqual({
       limbCount: 0,
        word: '',
        chosen: '',
        guess: '',    });
  });

//   it('creates a word array out of avaiable words', () => {
//       word = ['solatious', 'redneck']
//       const state = createWordArray(getWord(state), [])
//       expect(state).toEqual(['solatious', 'redneck']);

//   });

  it('make sure returning a valid Game State', () => {
    const state = getGameState(firstGameState, {});
    expect(state).toEqual(GAME_STATE.WIN);
  });

  it('make sure return lost game state when limbs are six', () => {
    const state = getGameState(secondGameState, {});
    expect(state).toEqual(GAME_STATE.LOSE);
  });

  it('returns currently playing gameState when word is not guessed and limbs are below 6', () => {
      const state = getGameState(thirdGameState, {});
      expect(state).toEqual(GAME_STATE.PLAYING);
  });

});