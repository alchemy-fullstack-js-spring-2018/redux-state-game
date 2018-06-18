import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import gallows from '../../../assets/gallows.png';
import { findMisses, getGameState } from './reducers';
import styles from './Hangman.css';
import Limb from './Limb';
import head from '../../../assets/head.png';
import leftArm from '../../../assets/leftArm.png';
import leftLeg from '../../../assets/leftLeg.png';
import rightArm from '../../../assets/rightArm.png';
import rightLeg from '../../../assets/rightLeg.png';
import torso from '../../../assets/torso.png';

const limbImages = [head, torso, leftArm, rightArm, leftLeg, rightLeg];


const limbs = [
  {  type: 'head', image: limbImages[0] },
  {  type: 'torso', image: limbImages[1] },
  {  type: 'rArm', image: limbImages[2] },
  {  type: 'lArm', image: limbImages[3] },
  {  type: 'rLeg', image: limbImages[4] },
  {  type: 'lLeg', image: limbImages[5] }
];

class Hangman extends Component {

    static propTypes = {
      misses: PropTypes.array.isRequired,
      gameState: PropTypes.string.isRequired,
    };

    handleDeathTwitch = () => {
      const head = document.querySelector('.head img');
      head ? head.style.transform = 'rotate(0deg)' : null;
    };

    handleHeadReset = () => {
      const head = document.querySelector('.head img');
      head ? head.style.transform = 'rotate(14deg)' : null;
    };

    render() {
      const { misses, gameState } = this.props;
      const missed = misses.length;
      const shownLimbs = limbs.slice(0, missed);

      return (
        <section className={styles.hangman}>
          {gameState !== 'LOSE' ? this.handleHeadReset() : this.handleDeathTwitch() }
          <section id="scaffold">
            <div id="gallows-container">
              <img className='gallows' src={gallows}/>
              <div id="limbs">
                {shownLimbs.map((limb, index) => <Limb
                  key= {index}
                  data= {limb}
                />)}
              </div>
            </div>               
          </section>
        </section>
      );
    }
}

export default connect(
  state => ({
    misses: findMisses(state),
    gameState: getGameState(state),
  }),
  null
)(Hangman);