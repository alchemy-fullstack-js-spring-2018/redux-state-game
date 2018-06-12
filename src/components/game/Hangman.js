import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Limb from './Limb';
import { limbImages } from '../../../assets/images';
import { findMisses } from './reducers';

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
      misses: PropTypes.array.isRequired
    };

    render() {
      const { misses } = this.props;
      const missed = misses.length;
      const shownLimbs = limbs.slice(0, missed);

      return (
        <section>
          {/* i am a scaffold */}
          {shownLimbs.map((limb, index) => <Limb
            key= {index}
            data= {limb}
          />)}
        </section>
      );
    }
}

export default connect(
  state => ({
    misses: findMisses(state)
  }),
  null
)(Hangman);