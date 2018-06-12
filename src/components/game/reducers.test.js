import {
  guesses,
  word,
  GUESS,
  NEW_GAME,
  GAME_STATE,
  getGuesses,
  getWord,
  createWordArray,
  findHits,
  findMisses,
  countMisses,
  getGameState } from './reducers';

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

  it('gets the mystery word', () => {
    const word = 'secret';
    const got = getWord({ word });
    expect(got).toBe(word);
  });

  it('creates an array from the mystery word', () => {
    const word = 'unknown';
    const array = createWordArray({ word });
    expect(array).toEqual(['u', 'n', 'k', 'n', 'o', 'w', 'n']);
  });

  it('provides an array of guesses that are in the mystery word', () => {
    const word = 'hidden';
    const guesses = ['a', 'd'];
    const hits = findHits({ word, guesses });
    expect(hits).toEqual(['d']);
  });

  it('provides an array of guesses that are not in the mystery word', () => {
    const word = 'hidden';
    const guesses = ['a', 'd'];
    const misses = findMisses({ word, guesses });
    expect(misses).toEqual(['a']);
  });

  it('provides the number of misses', () => {
    const word = 'hidden';
    const guesses = ['a', 'd', 's'];
    const misses = countMisses({ word, guesses });
    expect(misses).toBe(2);
  });

  it('gets a game state of EMPTY', () => {
    expect(getGameState([])).toBe(GAME_STATE.EMPTY);
  });

  it('gets a game state of WIN', () => {
    expect(getGameState({ word: 'dog', guesses: ['a', 'd', 'o', 'g'] })).toBe(GAME_STATE.WIN);
  });
});