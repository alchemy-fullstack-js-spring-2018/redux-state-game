import React, { PureComponent } from 'react';
import Game from '../game/Game';

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <h1>Tasha and Steele game</h1>
        <Game/>
      </div>
    );
  }
}
