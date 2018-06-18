import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getGameState } from './reducers';
import { alphabet } from '../../constants';
import Player from './Player';
import Key from './Key';
import styles from './GameStatus.css';

class GameStatus extends Component {

  static propTypes = {
    gameState: PropTypes.string.isRequired,
  };

  render() {
    const { gameState } = this.props;

    return (
      <section className={styles.gameStatus}>
        <div id="keyboard">
          {gameState === 'PLAYING' && alphabet.map(elem =>
            <Key 
              key={elem}
              letter={elem} />
          )}
        </div>
        <div id="player">
          {gameState === 'WIN' ? <span>You won!</span> : null}
          {gameState === 'LOSE' ? <span>You lost!</span> : null}
        </div>
        <Player />
      </section>
    );
  }
}

export default connect(
  state => ({
    gameState: getGameState(state),
  }),
  null
)(GameStatus);