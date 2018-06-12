import {
  guesses,
  GUESS
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
});