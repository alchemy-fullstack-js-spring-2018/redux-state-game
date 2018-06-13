import { makeChoice, newRound, poke1, poke2, makeAttack } from './actions';
import { SELECTION, NEW_ROUND, COUNTER, ROUND_STATE } from './reducers';

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
      payload: { index: 1, choice: expect.objectContaining({ name: expect.any(String) }) }
    });
  });

  it('dispatches new round', () => {
    expect(newRound()).toEqual({ type: NEW_ROUND });
  });

  it('dispatches new hp for computer', () =>  {
    const thunk = makeAttack(8);
    const dispatch = jest.fn();
    const getState = () => ({ selections: [poke1, poke2] });
    thunk(dispatch, getState);

    const { calls } = dispatch.mock;
    expect(calls.length).toBe(2);

    expect(calls[0][0]).toEqual({
      type: COUNTER,
      payload: 8
    });

    expect(calls[1][0]).toEqual({
      type: ROUND_STATE,
      payload: 'PLAYING'
    });
  });
});