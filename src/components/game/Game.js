import React, { Component } from 'react';
import Hangman from './Hangman';
import Letters from './Letters';
// import GameStatus from './GameStatus';

export default class Game extends Component {

  render() {

    return (
      <section>
        <Hangman />
        <Letters />
      </section>
    );
  }
}

