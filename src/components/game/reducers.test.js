import {
  selections, SELECTION, getRoundState, ROUND_STATE, match, initMatch, TALLY_ROUND, NEW_ROUND
} from './reducers';

describe('selections reducer', () => {
  it('has empty array for initial state', () => {
    const state = selections(undefined, {});
    expect(state).toEqual([' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']);
  });

  it('records a selection', () => {
    const state = selections(undefined, { type: SELECTION, payload: { index: 3, player: 'X' } });
    expect(state).toEqual([' ', ' ', ' ', 'X', ' ', ' ', ' ', ' ', ' ']);
  });

  it('resets to empty array on new round', () => {
    const state = selections(['X', 'X', 'X', ' ', ' ', ' ', ' ', ' ', ' '], { type: NEW_ROUND });
    expect(state).toEqual([' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']);
  });
});

describe('round_state selectors', () => {

  const testRoundState = (selections, expected) => {
    expect(getRoundState({ selections })).toBe(expected);
  };

  it('gets playing round state', () => {
    testRoundState([' ', ' ', ' ', 'X', ' ', ' ', ' ', ' ', ' '], ROUND_STATE.PLAYING);
  });
  
  it('gets winning round state condition 1', () => {
    testRoundState(['X', 'X', 'X', 'O', ' ', ' ', ' ', ' ', ' '], ROUND_STATE.WIN_X);
  });
  
  it('gets winning round state condition 2', () => {
    testRoundState([' ', ' ', ' ', 'O', 'O', 'O', ' ', ' ', ' '], ROUND_STATE.WIN_O);
  });
  
  
  it('gets winning round state condition 3', () => {
    testRoundState([' ', 'X', ' ', 'O', 'O', ' ', 'X', 'X', 'X'], ROUND_STATE.WIN_X);
  });
  
  it('gets winning round state condition 4', () => {
    testRoundState(['X', 'O', ' ', 'X', 'O', ' ', 'X', ' ', ' '], ROUND_STATE.WIN_X);
  });
  
  it('gets winning round state condition 5', () => {
    testRoundState([' ', 'O', ' ', 'X', 'O', ' ', 'X', 'O', ' '], ROUND_STATE.WIN_O);
  });
  
  it('gets winning round state condition 6', () => {
    testRoundState([' ', ' ', 'X', ' ', ' ', 'X', ' ', ' ', 'X'], ROUND_STATE.WIN_X);
  });
  
  it('gets winning round state condition 7', () => {
    testRoundState(['X', ' ', ' ', ' ', 'X', ' ', ' ', ' ', 'X'], ROUND_STATE.WIN_X);
  });
  
  it('gets winning round state condition 8', () => {
    testRoundState([' ', ' ', 'O', ' ', 'O', ' ', 'O', ' ', ' '], ROUND_STATE.WIN_O);
  });

  it('gets winning round state condition 8', () => {
    testRoundState(['X', 'O', 'X', 'O', 'X', 'X', 'O', 'X', 'O'], ROUND_STATE.TIE);
  });


});

describe('match', () => {
  it('initializes to zero count stats', () => {
    const state = match(undefined, {});
    expect(state).toEqual(initMatch());
  });

  it('Increments when O wins', () => {
    const state = match(initMatch(), {
      type: TALLY_ROUND,
      payload: ROUND_STATE.WIN_O
    });
    const expected = initMatch();
    expected[ROUND_STATE.WIN_O] = 1;

    expect(state).toEqual(expected);
  });

  it('Increments when X wins', () => {
    const state = match(initMatch(), {
      type: TALLY_ROUND,
      payload: ROUND_STATE.WIN_X
    });
    const expected = initMatch();
    expected[ROUND_STATE.WIN_X] = 1;

    expect(state).toEqual(expected);
  });

  it('Increments when tie', () => {
    const state = match(initMatch(), {
      type: TALLY_ROUND,
      payload: ROUND_STATE.TIE
    });
    const expected = initMatch();
    expected[ROUND_STATE.TIE] = 1;

    expect(state).toEqual(expected);
  });
});