import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Man from './Man';
// import Letters from './Letters';
import GameForm from './GameForm';
import { initGame } from './actions';

class Game extends PureComponent {

  static propTypes = {
    initGame: PropTypes.func.isRequired,
    word: PropTypes.string,
  };

  handleGuess = (guess) => {
    console.log('guess', guess);
  };

  render() {
    const { initGame, word } = this.props;

    return (
      <section>
        <Man />
        <section id="game-status">
          <button onClick={initGame}>New Game</button>
          {word ? <GameForm onGuess={this.handleGuess}/> : null}
        </section>
      </section>
    );
  }
}

export default connect(
  state => ({
    word: state.handleGame.word,
  }),
  { initGame }
)(Game);