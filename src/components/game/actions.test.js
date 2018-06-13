import { GUESS, NEW_GAME, PLAYER_ADD, RESULTS_LOAD, WIN_ADD, PLAYER_SET } from './reducers';
import { addGuess, initiateGame, setPlayer, recordWin, fetchResults } from './actions';

describe('actions', () => {
  it('adds a guess', () => {
    expect(addGuess('a')).toEqual({ type: GUESS, payload: 'a' });
  });

  it('starts a new game', () => {
    expect(initiateGame('Ryan')).toEqual({ type: NEW_GAME, payload: { word: expect.stringMatching(/\w+/), name: 'Ryan' } });
  });

  it('sets the current player, adding them to results if they are new', () => {
    const thunk = setPlayer('Keli');
    const dispatch = jest.fn();
    const getState = () => ({ results: [{ name: 'Ryan', games: 2, wins: 1 }] });
    thunk(dispatch, getState);

    const { calls } = dispatch.mock;
    expect(calls.length).toBe(2);

    expect(calls[0][0]).toEqual({ 
      type: PLAYER_SET,
      payload: 'Keli'
    });

    expect(calls[1][0]).toEqual({ 
      type: PLAYER_ADD,
      payload: 'Keli'
    });
  });
});

it('adds a win to the current player\'s results', () => {
  expect(recordWin('Keli')).toEqual({ type: WIN_ADD, payload: 'Keli' });
});

it('loads results from local storage or returns an empty array', () => {
  localStorage.setItem('results', JSON.stringify([{ name: 'Ryan', games: 2, wins: 1 }]));
  expect(fetchResults()).toEqual({ type: RESULTS_LOAD, payload: [{ name: 'Ryan', games: 2, wins: 1 }] });
  localStorage.clear();
  expect(fetchResults()).toEqual({ type: RESULTS_LOAD, payload: [] });
});