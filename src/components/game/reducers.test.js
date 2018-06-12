import {
  selections,
  SELECTION, 
  NEW_ROUND,
  ROUND_STATE
} from './reducers';

describe('selections reducer', () => {

  it('has empty array for initial state', () => {
    const state = selections(undefined, {});
    expect(state).toEqual([]);
  });

});