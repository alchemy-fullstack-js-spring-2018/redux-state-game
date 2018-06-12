import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Hangman from './Hangman';
import MysteryWord from './MysteryWord';
import WrongLetters from './WrongLetters';
// import LetterInput from './LetterInput';
import { getGameState, createWordArray, countMisses, findHits, findMisses, GAME_STATE } from './reducers';
import { initiateGame, addGuess } from './actions';

const { PLAYING, WIN, LOSE, EMPTY } = GAME_STATE;

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

  state = {
    entry: ''
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addGuess(this.state.entry);
    this.setState({ entry: '' });
  };
  
  render() {
    const { initiateGame, wordArray, missesCount, hits, misses, gameState } = this.props;
    const { entry } = this.state;

    return (
      <section>
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
    misses: findMisses(state)
  }),
  { initiateGame, addGuess }
)(Game);