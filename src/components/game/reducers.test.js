import { NEW_GAME, NEW_ROUND, NEW_GUESS, SAVE_GAME, LOAD_GAME,
  getGameState, noStore, initMatch,
  guessed, word, wordBank, tally, player, GAME_STATE } from './reducers';

describe('guessed reducer', () => {
  it('has an initial state of an empty array', () => {
    const state = guessed(undefined, {});
    expect(state).toEqual([]);
  });

  it('records a guess', () => {
    const state = guessed([], {
      type: NEW_GUESS,
      payload: 'B'
    });

    expect(state).toEqual(['B']);
  });

  it('resets to an empty array for a new game', () => {
    const state = guessed(['A', 'B'], { type: NEW_GAME });
    expect(state).toEqual([]);
  });

  it('resets to an empty array for a new round', () => {
    const state = guessed(['A', 'B'], { type: NEW_ROUND });
    expect(state).toEqual([]);
  });

  it('load previous guesses on load game', () => {
    const state = guessed([], { type: LOAD_GAME, payload: { guessed: ['A', 'B'] } });
    expect(state).toEqual(['A', 'B']);
  });
});

describe('word reducer', () => {
  it('has an initial state of an empty string', () => {
    const state = word(undefined, {});
    expect(state).toEqual('');
  });

  it('sets a new mystery word on new game', () => {
    const state = word('', { type: NEW_GAME, payload: { word: 'game' } });
    expect(state).toEqual('game');
  });

  it('sets a new mystery word on new round', () => {
    const state = word('', { type: NEW_ROUND, payload: { word: 'round' } });
    expect(state).toEqual('round');
  });

  it('loads previous word on load game', () => {
    const state = word('', { type: LOAD_GAME, payload: { word: 'load' } });
    expect(state).toEqual('load');
  });
});


describe('wordbank reducer', () => {
  const testWordBank = ['too', 'many', 'tests'];

  it('has a default state of an empty array', () => {
    const state = wordBank(undefined, {});
    expect(state).toEqual([]);
  });

  it('loads a word bank on new game', () => {
    const state = wordBank(['bad'], { type: NEW_GAME, payload: { wordBank: testWordBank } });
    expect(state).toEqual(testWordBank);
  });

  it('loads a word bank on a new round', () => {
    const state = wordBank(['old'], { type: NEW_ROUND, payload: { wordBank: testWordBank } });
    expect(state).toEqual(testWordBank);
  });

  it('loads previous wordbank on load game', () => {
    const state = wordBank([], { type: LOAD_GAME, payload: { wordBank: testWordBank } });
    expect(state).toEqual(testWordBank);
  });
});

const firstGameState = {
  word: 'solatious',
  guessed: ['s', 'o', 'l', 'a', 't', 'i', 'o', 'u', 's'],
};

// const secondGameState = {
//   word: 'sassy',
//   guessed: ['s', 'a', 's', 's', 'y'],
// };

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

  it('make sure its returning a valid Game State', () => {
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

describe('tally reducer', () => {
  
  it('checks to see if game lost, Tally lose goes up by one', () => {
    const state = tally(initMatch(), {
      type: NEW_ROUND,
      payload: {
        gameState: [GAME_STATE.LOSE],
      }
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
      payload: {
        gameState: [GAME_STATE.WIN] }
    });
    const expected = {
      [GAME_STATE.WIN]: 1,
      [GAME_STATE.LOSE]: 0,
    };

    expect(state).toEqual(expected);
  });

});

describe('Player Reducer', () => {
  const savedId = 345;

  it('has a default value', () => {
    const state = player(undefined, {});
    expect(state).toEqual(noStore());
  });

  it('save game sets player id', () => {
    const state = player('', { type: SAVE_GAME, payload: { id: savedId } });
    expect(state).toEqual({ stored: true, id: savedId });
  });

  it('loads game returns stored bool and id', () => {
    const state = player('', { type: LOAD_GAME, payload: { id: savedId } });
    expect(state).toEqual({ stored: true, id: savedId });
  });
});