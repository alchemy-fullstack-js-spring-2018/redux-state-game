import { GUESS, NEW_GAME, PLAYER_ADD, RESULTS_LOAD, WIN_ADD, PLAYER_SET } from './reducers';
import { addGuess, initiateGame, setPlayer } from './actions';

describe('actions', () => {
  it('adds a guess', () => {
    expect(addGuess('a')).toEqual({ type: GUESS, payload: 'a' });
  });

  it('starts a new game', () => {
    expect(initiateGame('Ryan')).toEqual({ type: NEW_GAME, payload: { word: expect.stringMatching(/\w+/), name: 'Ryan' } });
  });


});