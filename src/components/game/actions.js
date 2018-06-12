import {
  SELECTION,
  NEW_ROUND,
  // ROUND_STATE
} from './reducers';



export const poke1 = {
  name: 'bulb', 
  hp: 5, 
  attack: 2
};
  
export const poke2 = {
  name: 'char', 
  hp: 7, 
  attack: 1,
};
  
export const poke3 = {
  name: 'squirt', 
  hp: 4, 
  attack: 3,
};

const getRandom = () => {
  const index = Math.floor(Math.random() * Math.floor(3));
  return [poke1, poke2, poke3][index];
};

export const makeChoice = choice => {
  return (dispatch, /*getState*/) => {
    dispatch({
      type: SELECTION,
      payload: { index: 0, choice }
    });

    dispatch({
      type: SELECTION,
      payload: { index: 1, choice: getRandom() }
    });

    // const state = getState();
    // const roundState = getRoundState(state);

  };
};

export const newRound = () => ({ type: NEW_ROUND });