import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Man from './Man';
// import Letters from './Letters';
import GameForm from './GameForm';
import { initGame, makeGuess } from './actions';

class Game extends PureComponent {

  static propTypes = {
    initGame: PropTypes.func.isRequired,
    makeGuess: PropTypes.func.isRequired,
    limbCount: PropTypes.number,
    word: PropTypes.string,
    chosen: PropTypes.array
  };

  handleGuess = (letter) => {
    this.setState(({ guess: letter }, ()=> {
      this.props.makeGuess(letter, this.props.chosen);
    }));

  }

  render() {
    const { initGame, word, limbCount, chosen } = this.props;

    return (
      <section>
        <Man />
        <section id="game-status">
          {word ? <span>{6 - limbCount} out of 6 limbs remaining!</span> : null}
          {chosen ? chosen.map((letter, index) => <div key={index}>{letter}</div>) : null}
          <button onClick={initGame}>New Game</button>
          <GameForm onGuess={this.handleGuess}/>
        </section>
      </section>
    );
  }
}

export default connect(
  state => ({
    limbCount: state.handleGame.limbCount,
    gameState: state.handleGame.gameState,
    word: state.handleGame.word,
    chosen: state.handleGame.chosen
  }),
  { initGame, makeGuess }
)(Game);