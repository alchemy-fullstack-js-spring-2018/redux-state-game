import { getRandomWord } from './actions';

describe ('Action tests', () => {


  it('gets a random word from gameWords array', () => {
    const wordBank = ['IGLOO', 'ELEPHANT', 'HORSE'];
    // let regex = /^"IGLOO"|"ELEPHANT'"|"HORSE"/;
    
    expect(getRandomWord(wordBank)).toMatch(/(IGLOO|HORSE|ELEPHANT)/gm); 
  });

  

});