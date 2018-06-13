import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Hangman from './Hangman';
import MysteryWord from './MysteryWord';
import WrongLetters from './WrongLetters';
import { getGameState, createWordArray, countMisses, findHits, findMisses, GAME_STATE, getWord } from './reducers';
import { initiateGame, addGuess } from './actions';
import styles from './Game.css';

const { PLAYING, WIN, LOSE, EMPTY } = GAME_STATE;

const message = {
  [PLAYING]: 'Enter a Letter Below!',
  [WIN]: 'You Win!',
  [LOSE]: 'You Lose!',
  [EMPTY]: ''
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
      <section className={styles.game}>
        <button onClick={initiateGame}>NEW GAME</button>
        <h2 className={gameState.toLowerCase()}>{message[gameState]}</h2>
        {gameState === PLAYING &&
          <form onSubmit={this.handleSubmit}>
            <input type="text" maxLength="1" value={entry} onChange={({ target }) => this.setState({ entry: target.value.toUpperCase() })}/>
          </form>
        }
        {gameState === LOSE && <h3>The word was {word}</h3>}
        <Hangman missesCount={missesCount}/>
        <MysteryWord hits={hits} wordArray={wordArray}/>
        {gameState !== EMPTY && <WrongLetters misses={misses}/>}
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