import React, { Component } from 'react';
import Game from '../game/Game';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Tic-Tac-Toe</h1>
        <Game/>
      </div>
    );
  }
}