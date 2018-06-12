import { GUESS } from './reducers';
import { addGuess } from './actions';

describe('actions', () => {
  it('adds a guess', () => {
    expect(addGuess('a')).toEqual({ type: GUESS, payload: 'a' });
  });
});