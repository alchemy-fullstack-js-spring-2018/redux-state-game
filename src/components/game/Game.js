import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Man from './Man';
// import Letters from './Letters';
// import GameForm from './GameForm';

import { initGame } from './actions';
import { getGameState } from './reducers';

class Game extends PureComponent {

  static propTypes = {
    initGame: PropTypes.func.isRequired,
  };

  render() {
    const { initGame } = this.props;

    return (
      <section>
        <Man />
        <section id="game-status">
          <button onClick={initGame}>New Game</button>
        </section>
      </section>
    );
  }
}

export default connect(
  state => ({
    gameState: getGameState(state),
  }),
  { initGame }
)(Game);