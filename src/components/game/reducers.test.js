import {
  selections,
  SELECTION,
  COUNTER, 
  NEW_ROUND,
  ROUND_STATE,
  getSelections,
  getRoundState,
  hpTracker
} from './reducers';

const poke1 = {
  name: 'pocketmon', 
  hp: 5, 
  attack: 4
};

const poke2 = {
  name: 'pocketwomon', 
  hp: 50, 
  attack: 3,
};

const poke3 = {
  name: 'pocketthem', 
  hp: 0, 
  attack: 2,
};

describe('selections reducer', () => {

  it('has empty array for initial state', () => {
    const state = selections(undefined, {});
    expect(state).toEqual([]);
  });

  it.skip('records player selection', () => {
    let state = selections([], {
      type: SELECTION,
      payload: { 
        name: 'pocketmon', 
        hp: 5, 
        attack: 500, 
        index: 0 
      }
    });
    expect(state).toEqual([poke1]);
      
    state = selections(state, {
      type: SELECTION,
      payload: {
        name: 'pocketwomon', 
        hp: 50, 
        attack: 50, 
        index: 1
      }
    });
    expect(state).toEqual([poke1, poke2]);
  });

  it('resets to empty array on new round', () => {
    const state = selections([{
      name: 'pocketmon', 
      hp: 5, 
      attack: 500, 
    }, {
      name: 'pocketwomon', 
      hp: 50, 
      attack: 50, 
    }], { type: NEW_ROUND });
    expect(state).toEqual([]);
  });

  describe('selectors', () => {

    it('get selections', () => {
      const selections = [poke1, poke2];
      const got = getSelections({ selections });
      expect(got).toBe(selections);
    });

    const testRoundState = (selections, expected) => {
      expect(getRoundState({ selections })).toBe(expected);
    };

    it('gets choosing round state', () => {
      testRoundState([], ROUND_STATE.CHOOSING);
    });

    it('gets playing round state', () => {
      testRoundState([poke1, poke2], ROUND_STATE.PLAYING);
    });

    it('gets winning state', () => {
      testRoundState([poke1, poke3], ROUND_STATE.WIN);
    });

    it('gets losing state', () => {
      testRoundState([poke3, poke2], ROUND_STATE.LOSE);
    });

  });
});

describe.skip('hp tracking', () => {
  
  it('reduces hp and gets new state', () => {
    const hp = hpTracker([poke1, poke2], { type: COUNTER });
    expect(hp).toEqual();
  });
});