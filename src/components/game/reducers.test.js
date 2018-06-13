import { tally, word, wordBank, initMatch, getGameState, guessed, newMatch, handleGame, NEW_GAME, NEW_ROUND, NEW_GUESS, createWordArray, GAME_STATE } from './reducers';// eslint-disable-line

const firstGameState = {
  word: 'solatious',
  guessed: ['s', 'o', 'l', 'a', 't', 'i', 'o', 'u', 's'],
};

const secondGameState = {
  word: 'sassy',
  guessed: ['s', 'a', 's', 's', 'y'],
};

const thirdGameState = {
  word: 'brassy',
  guessed: ['e', 'l', 'e', 'p', 'h', 'a', 'n', 't'],
};

const fourthGameState = {
  word: 'lassy',
  guessed: ['l', 'a'],
};


describe(' testing reducer function getGameState', () => {

  it('has a default value of an object with properties', () => {
    const state = getGameState(thirdGameState, {});
    expect(state).toEqual(GAME_STATE.LOSE);
  });

  it('make sure returning a valid Game State', () => {
    const state = getGameState(firstGameState, {});
    expect(state).toEqual(GAME_STATE.WIN);
  });

  it('make sure return lost game state when missed letters are six', () => {
    const state = getGameState(thirdGameState, {});
    expect(state).toEqual(GAME_STATE.LOSE);
  });

  it('returns currently playing gameState when word is not guessed and limbs are below 6', () => {
    const state = getGameState(fourthGameState, {});
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

  it('tests whether new game returns an empty array of letters', () => {

    const state = guessed(secondGameState.guessed, {
      type: NEW_GAME,
      payload: ''
    });

    const expected = [];
    expect(state).toEqual(expected);
  });
});

describe('testing word reducer function', () => {

  it('returns a string with word in state', () => {
    
    const state = word(thirdGameState.word, {
      type: NEW_GAME,
      payload: { word: 'brassy' }
    });

    const expected = 'brassy';
    expect(state).toEqual(expected);
  });

  it('return a string of previous words', () => {
    
    const state = word(secondGameState.word, {
      type: NEW_ROUND,
      payload: { word: 'sassy' }
    });

    const expected = 'sassy';
    expect(state).toEqual(expected);
  });

});


describe('Testing wordBank reducer function', () => {

  it('wordBank returns an array of strings', () => {
    const array = ['words', 'this'];

    const state = wordBank(secondGameState, {
      type: NEW_GAME,
      payload: { wordBank: array }
    });

    expect(state).toEqual(array);
  });
});