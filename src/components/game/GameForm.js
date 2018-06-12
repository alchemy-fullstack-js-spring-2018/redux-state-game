import React, { Component } from 'react';
import Man from './Man';
import Letters from './Letters';
import GameStatus from './GameStatus';

export default class GameForm extends Component {
  render() {
    return (
      <section>
        <Man />
        <Letters />
        <GameStatus />
      </section>
    );
  }
}