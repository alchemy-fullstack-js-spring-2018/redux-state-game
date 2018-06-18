

import { 
  getRandomWord,
  newGame,
  newRound,
  newGuess,
  saveGame,
  loadGame  } from './actions';

import { NEW_ROUND, NEW_GUESS, NEW_GAME,
         SAVE_GAME, LOAD_GAME } from './reducers'; //eslint-disable-line
         
describe('Game actions', () => {  
           
  it('gets a shuffled word from gameWords array', () => {
    const wordBank = ['IGLOO', 'ELEPHANT', 'HORSE'];
    expect(getRandomWord(wordBank)).toMatch(/(IGLOO|HORSE|ELEPHANT)/gm); 
  });

  it('starts a new game', () => {
    const thunk = newGame();
    const dispatch = jest.fn();
    const getState = () => ({});
    thunk(dispatch, getState);
    
    const { calls } = dispatch.mock;
    const { type, payload } = calls[0][0];
    const { word, wordBank } = payload;

    expect(type).toBe(NEW_GAME);
    expect(wordBank.length).toEqual(8);
    expect(word).toBeTruthy();
  });

  it('adds a new guess, if letter unguessed', () => {

    const thunk = newGuess('l');
    const dispatch = jest.fn();
    const getState = () => ({ guessed: ['A', 'E', 'I'] });
    thunk(dispatch, getState);
    
    const { calls } = dispatch.mock;
    const { type, payload } = calls[0][0];

    expect(type).toBe(NEW_GUESS);
    expect(payload).toBe('L');
  });

  it('does not call if letter already guessed', () => {

    const thunk = newGuess('a');
    const dispatch = jest.fn();
    const getState = () => ({ guessed: ['A', 'E', 'I'] });
    thunk(dispatch, getState);
    
    const { calls } = dispatch.mock;
    expect(calls.length).toBe(0);
  });

  it('starts a new round, tallies new', () => {

    const thunk = newRound();
    const dispatch = jest.fn();
    const getState = () => ({});
    thunk(dispatch, getState);
    
    const { calls } = dispatch.mock;
    const { type, payload } = calls[0][0];
    const { gameState } = payload;

    expect(type).toBe(NEW_ROUND);
    expect(gameState).toBe('BLANK');
  });

});

describe('Save actions', () => {  

  it('saves a game on dispatch and to local storage', () => {
    const saveId = 123;

    const thunk = saveGame(saveId);
    const dispatch = jest.fn();
    const getState = () => ({ tally: { WIN: 0, LOSE: 2 } });
    thunk(dispatch, getState);
    
    const { calls } = dispatch.mock;
    const { type, payload } = calls[0][0];

    expect(type).toBe(SAVE_GAME);
    expect(payload).toEqual(saveId);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
  });

  it('loads a game on dispatch and from local storage', () => {

    const saveId = 123;

    const thunk = loadGame(123);
    const dispatch = jest.fn();
    const getState = () => ({});
    thunk(dispatch, getState);
    
    const { calls } = dispatch.mock;
    const { type, payload } = calls[0][0];
    const { id } = payload;

    expect(type).toBe(LOAD_GAME);
    expect(id).toEqual(saveId);
    expect(localStorage.getItem).toHaveBeenCalledWith('saves');
  });
});