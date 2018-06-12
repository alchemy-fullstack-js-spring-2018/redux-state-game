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

  it('records player selection', () => {
    let state = selections([], {
      type: SELECTION,
      payload: { 
        name: 'pocketmon', 
        hp: 5, 
        attack: 500, 
        index: 0 
      }
    });
    expect(state).toEqual([{
      name: 'pocketmon', 
      hp: 5, 
      attack: 500, }]);
      
    state = selections(state, {
      type: SELECTION,
      payload: {
        name: 'pocketwomon', 
        hp: 50, 
        attack: 50, 
        index: 1
      }
    });
    expect(state).toEqual([{
      name: 'pocketmon', 
      hp: 5, 
      attack: 500, 
    }, {
      name: 'pocketwomon', 
      hp: 50, 
      attack: 50, 
    }]);
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
});