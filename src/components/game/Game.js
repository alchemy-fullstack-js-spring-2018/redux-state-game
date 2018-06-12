import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Hangman from './Hangman';
import MysteryWord from './MysteryWord';
import WrongLetters from './WrongLetters';
// import LetterInput from './LetterInput';
import { getGameState, createWordArray, countMisses, findHits, findMisses, GAME_STATE, getWord } from './reducers';
import { initiateGame, addGuess } from './actions';

const { PLAYING, WIN, LOSE, EMPTY } = GAME_STATE;

const message = {
  [PLAYING]: 'Enter a Letter Below!',
  [WIN]: 'You Win!',
  [LOSE]: 'You Lose!',
  [EMPTY]: 'Press New Game!'
};

class Game extends PureComponent {
  static propTypes = {
    gameState: PropTypes.string.isRequired,
    initiateGame: PropTypes.func.isRequired,
    wordArray: PropTypes.array,
    hits: PropTypes.array,
    misses: PropTypes.array,
    missesCount: PropTypes.number,
    addGuess: PropTypes.func.isRequired,
    word: PropTypes.string
  };

  state = {
    entry: ''
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addGuess(this.state.entry);
    this.setState({ entry: '' });
  };
  
  render() {
    const { initiateGame, wordArray, missesCount, hits, misses, gameState, word } = this.props;
    const { entry } = this.state;

    return (
      <section>
        <h2>{message[gameState]}</h2>
        {gameState === LOSE && <span>The word was {word}</span>}
        <button onClick={initiateGame}>New Game</button>
        <Hangman missesCount={missesCount}/>
        <MysteryWord hits={hits} wordArray={wordArray}/>
        {gameState !== EMPTY && <WrongLetters misses={misses}/>}
        {gameState === PLAYING &&
          <form onSubmit={this.handleSubmit}>
            <input type="text" maxLength="1" value={entry} onChange={({ target }) => this.setState({ entry: target.value.toUpperCase() })}/>
          </form>
        }
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
    misses: findMisses(state),
    word: getWord(state)
  }),
  { initiateGame, addGuess }
)(Game);