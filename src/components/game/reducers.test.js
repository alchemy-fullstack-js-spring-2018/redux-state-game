import {
  guesses,
  word,
  GUESS,
  NEW_GAME,
  getGuesses
} from './reducers';

describe('guesses reducer', () => {
  it('has an inital state of an empty array', () => {
    const state = guesses(undefined, {});
    expect(state).toEqual([]);
  });

  it('records a guess', () => {
    const state = guesses([], {
      type: GUESS,
      payload: { guess: 'a' }
    });

    expect(state).toEqual(['a']);
  });

  it('resets to an empty array for a new game', () => {
    const state = guesses(['a', 'b'], { type: NEW_GAME });
    expect(state).toEqual([]);
  });
});

describe('word reducer', () => {
  it('has an initial state of an empty string', () => {
    const state = word(undefined, {});
    expect(state).toEqual('');
  });

  it('sets a new mystery word', () => {
    const state = word('', { type: NEW_GAME, payload: 'secret' });
    expect(state).toEqual('secret');
  });
});

describe('selectors', () => {
  it('gets guesses', () => {
    const guesses = ['a', 'b'];
    const got = getGuesses({ guesses });
    expect(got).toBe(guesses);
  });
});