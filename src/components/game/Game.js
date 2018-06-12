import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Man from './Man';
// import Letters from './Letters';
// import GameForm from './GameForm';

import { initGame } from './actions';

export default class Game extends Component {

  static propTypes = {
    initGame: PropTypes.function.isRequired,
  };

  render() {
    return (
      <section>
        <Man />
        <section id="game-status">
        
        <button onClick={initiateGame}>New Game</button>
        </section>
      </section>
    );
  }
}