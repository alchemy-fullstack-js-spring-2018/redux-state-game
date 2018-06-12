import {
  guesses
} from './reducers';

describe('guesses reducer', () => {
  it('has an inital state of an empty array', () => {
    const state = guesses(undefined, {});
    expect(state).toEqual([]);
  });
});