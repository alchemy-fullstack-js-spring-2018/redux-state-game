import React, { Component } from 'react';
import Limb from './Limb';

const limbs = [{  type: 'head', image: 'url', visibility: 'hide' },
  {  type: 'torso', image: 'url', visibility: 'hide' },
  {  type: 'rArm', image: 'url', visibility: 'hide' },
  {  type: 'lArm', image: 'url', visibility: 'hide' },
  {  type: 'rLeg', image: 'url', visibility: 'hide' },
  {  type: 'lLeg', image: 'url', visibility: 'hide' }
];


export default class Game extends Component {
    state = {
      limbCount: 0,
    };

    handleIncorrect = () => {
      let prevCount = this.state.limbCount;
      this.setState({ limbCount: prevCount++ }, () => {
        if(this.state.limbCount === 6) this.callLose();
        limbs[prevCount].visibility = 'show';
      });
    }

    render() {
      return (
        <section>
          {/* i am a scaffold */}
          {limbs.map((limb, index) => <Limb
            key= {index}
            data= {limb}
          />)}
        </section>
      );
    }
}