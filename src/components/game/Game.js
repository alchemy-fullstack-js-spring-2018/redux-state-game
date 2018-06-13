import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { makeAttack } from './actions';
import Player from './Player';
import GameResults from './GameResults';
import styles from './Game.css';

const attackOpponent = (p1, p2) => {
  console.log('ATTACK RESULTS', p1.hp - p2.attack);
  const newHp = p1.hp - p2.attack;
  return p2.hp = newHp;
};

class Game extends PureComponent {

  static propTypes = {
    selections: PropTypes.array,
    makeAttack: PropTypes.func
  };

  render() {

    const { selections, makeAttack } = this.props;

    console.log('SELECTIONS', selections);
    console.log('PLAYER2', selections[1]);
    
    // const attack = attackOpponent(selections[0], selections[1]);
    // console.log('MAKE ATTACK', makeAttack(attack));


    return (
      <section className={styles.game}>
        <div className="players">
          <Player index={0}/>
          <Player index={1}/>
        </div>
        { selections === []
          ?
          <div></div>
          : <div><button onClick={() => makeAttack(attackOpponent(selections[0], selections[1]))}>Attack</button></div>
        }
        <GameResults/>
      </section>
    );
  }
}

export default connect(
  (state) => ({
    selections: state.selections
  }),
  { makeAttack }
)(Game);
