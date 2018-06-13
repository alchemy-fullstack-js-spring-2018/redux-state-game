import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { newGame, newRound } from './actions';
import { getGameState } from './reducers';
import { alphabet } from '../../constants';
import Key from './Key';

class GameStatus extends Component {


  static propTypes = {
    newGame: PropTypes.func.isRequired,
    gameState: PropTypes.string.isRequired,
    newRound: PropTypes.func.isRequired
  };

  render() {
    const { newGame, gameState, newRound } = this.props;
    let gameButton = gameState === 'BLANK' ? 'New Game' : 'Restart';

    return (
      <section>
        {gameState === 'PLAYING' && alphabet.map(elem =>
          <Key 
            key={elem}
            letter={elem} />
        )}
        {gameState === 'PLAYING' || gameState === 'WIN' && <button onClick={newRound}>New Round</button>}
        <button onClick={newGame}>{gameButton}</button>
        <br/>
        {gameState === 'WIN' ? <span>You won!</span> : null}
        {gameState === 'LOSE' ? <span>You lost!</span> : null}
      </section>
    );
  }
}

export default connect(
  state => ({
    gameState: getGameState(state),
  }),
  { newGame, newRound }
)(GameStatus);