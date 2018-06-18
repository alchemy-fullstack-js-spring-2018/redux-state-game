import { getRandomWord, newRound, newGuess  } from './actions'; //eslint-disable-line
import { NEW_ROUND, NEW_GUESS } from './reducers'; //eslint-disable-line


describe('Action tests', () => {
  //setting up middleware
  

  it('gets a random word from gameWords array', () => {
    const wordBank = ['IGLOO', 'ELEPHANT', 'HORSE'];
    
    expect(getRandomWord(wordBank)).toMatch(/(IGLOO|HORSE|ELEPHANT)/gm); 
  });
 
  // it('newGame test refreshes gamewords and grabs a new word', () => {
     
  
  // });

  // it('calls a newRound', () => {
  //   expect(newRound()).toEqual({ type: NEW_ROUND });
  // });
  
  // it('calls a new guess', () => {
  //   const thunk = newGuess('z');
  //   const dispatch = jest.fn();
  //   const getState = () => ({ guesses: ['z', 'd', 'l'] });
  //   thunk(dispatch, getState);

  //   const { calls } = dispatch.mock;
  //   expect(calls.length).toBe(3); //times mock is called. 
    
  //   expect(newGuess('z')).toEqual({ type: NEW_GUESS, payload: 'z' });


  // });

});