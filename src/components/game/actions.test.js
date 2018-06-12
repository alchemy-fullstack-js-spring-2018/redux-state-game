import { GUESS, NEW_GAME } from './reducers';
import { addGuess, initiateGame } from './actions';

describe('actions', () => {
  it('adds a guess', () => {
    expect(addGuess('a')).toEqual({ type: GUESS, payload: 'a' });
  });

  it('starts a new game', () => {
    expect(initiateGame()).toEqual({ type: NEW_GAME, payload: expect.stringMatching(/\w+/) });
  });
});