import {
  SELECTION,
  NEW_ROUND,
  COUNTER,
  ROUND_STATE, 
  getRoundState
} from './reducers';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}



export const poke1 = {
  name: 'bulb', 
  hp: 10, 
  attack: getRandomInt(1, 4),
  image: 'https://img.pokemondb.net/sprites/black-white/anim/normal/bulbasaur.gif'
};
  
export const poke2 = {
  name: 'char', 
  hp: 10, 
  attack: getRandomInt(1, 4),
  image: 'https://img.pokemondb.net/sprites/black-white/anim/normal/charmander.gif'
};
  
export const poke3 = {
  name: 'squirt', 
  hp: 10, 
  attack: getRandomInt(1, 4),
  image: 'https://img.pokemondb.net/sprites/black-white/anim/normal/squirtle.gif'
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

export const makeAttack = (num) => {
  return (dispatch, getState) => {
    dispatch({
      type: COUNTER,
      payload: num
    });

    const state = getState();
    const roundState = getRoundState(state);

    dispatch({
      type: ROUND_STATE,
      payload: roundState
    }); 
  };
};

export const newRound = () => ({ type: NEW_ROUND });