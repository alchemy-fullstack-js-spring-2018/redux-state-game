import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Hangman from './Hangman';
import MysteryWord from './MysteryWord';
import WrongLetters from './WrongLetters';
import LetterInput from './LetterInput';
import { getGameState, createWordArray, countMisses, findHits, findMisses } from './reducers';
import { initiateGame, addGuess } from './actions';

class Game extends PureComponent {
  static propTypes = {
    gameState: PropTypes.string.isRequired,
    initiateGame: PropTypes.func.isRequired,
    wordArray: PropTypes.array,
    hits: PropTypes.array,
    misses: PropTypes.array,
    missesCount: PropTypes.number,
    addGuess: PropTypes.func.isRequired
  };
  
  render() {
    const { initiateGame, wordArray, missesCount, hits, misses } = this.props;

    return (
      <section>
        <button onClick={initiateGame}>New Game</button>
        <Hangman missesCount={missesCount}/>
        <MysteryWord/>
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