import { makeChoice, newRound, poke1, poke2, poke3 } from './actions';
import { SELECTION, NEW_ROUND } from './reducers';

describe('makeChoice action', () => {

  it('dispatches player and random computer choice', () => {
    const thunk = makeChoice(poke1);
    const dispatch = jest.fn();
    const getState = () => ({ selections: [poke1, poke2] });
    thunk(dispatch, getState);

    const { calls } = dispatch.mock;
    expect(calls.length).toBe(2);

    expect(calls[0][0]).toEqual({
      type: SELECTION,
      payload: { index: 0, choice: poke1 }
    });

    expect(calls[1][0]).toEqual({
      type: SELECTION,
      payload: { index: 1, choice: expect.objectContaining(poke1 || poke2 || poke3) }
    });
  });

  it('dispatches new round', () => {
    expect(newRound()).toEqual({ type: NEW_ROUND });
  });
});