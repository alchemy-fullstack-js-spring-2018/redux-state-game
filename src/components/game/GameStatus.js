import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { newGame } from './actions';
import { getGameState } from './reducers';
import { alphabet } from '../../constants';
import Key from './Key';

class GameStatus extends Component {


  static propTypes = {
    newGame: PropTypes.func.isRequired,
    gameState: PropTypes.string.isRequired,
  };

  render() {
    const { newGame, gameState } = this.props;

    return (
      <section>
        {gameState === 'PLAYING' && alphabet.map(elem =>
          <Key 
            key={elem}
            letter={elem} />
        )}
        <button onClick={newGame}>New Game</button>
      </section>
    );
  }
}

export default connect(
  state => ({
    gameState: getGameState(state),
  }),
  { newGame }
)(GameStatus);