import { makeSelection, newRound } from './actions';
import { SELECTION, TURN, TALLY_ROUND, NEW_ROUND } from './reducers';

describe('makeSelection action', () => {
  it('dispatches player choice', () => {
    const thunk = makeSelection(3, 'X');
    const dispatch = jest.fn();
    const getState = () => ({ selections: ['X', 'X', 'X', ' ', ' ', ' ', ' ', ' ', ' '] });
    thunk(dispatch, getState);

    const { calls } = dispatch.mock;
    expect(calls.length).toBe(3);

    expect(calls[0][0]).toEqual({
      type: SELECTION,
      payload: { index: 3, player: 'X' }
    });

    expect(calls[1][0]).toEqual({
      type: TURN
    });

    expect(calls[2][0]).toEqual({
      type: TALLY_ROUND,
      payload: expect.stringMatching('WIN_X')
    });

  });

  it('dispatches new round', () => {
    expect(newRound()).toEqual({ type: NEW_ROUND });
  });
});