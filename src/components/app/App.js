import React, { PureComponent } from 'react';
import Game from '../game/Game';

export default class App extends PureComponent {
  render() {
    return (
      <main>
        <h1>Hangman</h1>
        <Game/>
      </main>
    );
  }
}