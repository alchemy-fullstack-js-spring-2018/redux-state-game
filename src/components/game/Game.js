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
          <button onClick={initGame}>New Game</button>
          {word ? <GameForm onGuess={this.handleGuess}
            limbCount={limbCount}
            chosen={chosen}/> : null}
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