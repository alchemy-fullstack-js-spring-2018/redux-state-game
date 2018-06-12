import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Hangman from './Hangman';
import MysteryWord from './MysteryWord';
import WrongLetters from './WrongLetters';
import LetterInput from './LetterInput';
import { getGameState, createWordArray, countMisses, findHits, findMisses } from './reducers';
import { initiateGame, addGuess } from './actions';

class Game extends PureComponent {
  render() {
    return (
      <section>
        <Hangman/>
        <MysteryWord/>
        <button>New Game</button>
        <WrongLetters/>
        <LetterInput/>
      </section>
    );
  }
}

export default connect(
  state => ({
    gameState: getGameState(state),
    wordArray: createWordArray(state),
    missesCount: countMisses(state),
    hits: findHits(state),
    misses: findMisses(state)
  }),
  { initiateGame, addGuess }
)(Game);