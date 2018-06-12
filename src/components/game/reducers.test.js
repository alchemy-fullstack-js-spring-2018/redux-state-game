import { tally, initMatch, getGameState, guessed, newMatch, handleGame, NEW_GAME, NEW_ROUND, NEW_GUESS, createWordArray, GAME_STATE } from './reducers';// eslint-disable-line

const firstGameState = {
  limbCount: 2,
  word: 'solatious',
  guessed: 'solatious',
};

const secondGameState = {
  limbCount: 6,
  word: 'sassy',
  guessed: 'sassy',
};

const thirdGameState = {
  limbCount: 5,
  word: 'brassy',
  guessed: 'brass',
};
describe(' testing reducer function getGameState', () => {

  it('has a default value of an object with properties', () => {
    const state = getGameState(secondGameState, {});
    expect(state).toEqual(GAME_STATE.LOSE);
  });

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

describe('testing whether the Game tally is tallying', () => {
  
  it('checks to see if game lost, Tally lose goes up by one', () => {
    const state = tally(initMatch(), {
      type: NEW_ROUND,
      payload: GAME_STATE.LOSE
    });
    const expected = {
      [GAME_STATE.WIN]: 0,
      [GAME_STATE.LOSE]: 1,
    };

    expect(state).toEqual(expected);
  });

  it('checks to see if game won, Tally win goes up by one', () => {
    const state = tally(initMatch(), {
      type: NEW_ROUND,
      payload: GAME_STATE.WIN
    });
    const expected = {
      [GAME_STATE.WIN]: 1,
      [GAME_STATE.LOSE]: 0,
    };

    expect(state).toEqual(expected);
  });


});

describe('Testing user guessed', () => {

  it('tests whether guessed letters are returned', () => {

    const state = guessed(secondGameState.guessed, {
      type: NEW_GUESS,
      payload: 'a'
    });

    const expected =  ['s', 'a', 's', 's', 'y', 'a']; 
    expect(state).toEqual(expected);
  });
});