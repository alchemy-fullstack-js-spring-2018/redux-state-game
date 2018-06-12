import React, { PureComponent } from 'react';
import Player from '../game/Player';
import GameResults from './GameResults';
import styles from './Game.css';

export default class Game extends PureComponent {
  render() {
    return (
      <section className={styles.game}>
        <div className="players">
          <Player index={0}/>
          <Player index={1}/>
        </div>
        <GameResults/>
      </section>
    );
  }
}