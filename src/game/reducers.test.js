import {
  guesses,
  word,
  GUESS,
  NEW_GAME
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

});