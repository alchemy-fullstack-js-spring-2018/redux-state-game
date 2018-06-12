import React, { Component } from 'react';
import Man from './Man';
// import Letters from './Letters';
// import GameForm from './GameForm';

import { initiateGame, addGuess } from './actions';

export default class Game extends Component {
  render() {
    return (
      <section>
        <Man />
        <section id="game-status">
        </section>
      </section>
    );
  }
}