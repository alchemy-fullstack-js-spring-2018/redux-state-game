import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import gallows from '../../images/gallows.png';
import one from '../../images/one.png';
import two from '../../images/two.png';
import three from '../../images/three.png';
import four from '../../images/four.png';
import five from '../../images/five.png';
import full from '../../images/full.png';

export default class Hangman extends PureComponent {
  static propTypes = {
    missesCount: PropTypes.number
  };

  render() {
    const { missesCount } = this.props;

    return (
      <section>
        {!!missesCount || <img src={gallows}/>}
        {missesCount === 1 && <img src={one}/>}
        {missesCount === 2 && <img src={two}/>}
        {missesCount === 3 && <img src={three}/>}
        {missesCount === 4 && <img src={four}/>}
        {missesCount === 5 && <img src={five}/>}
        {missesCount === 6 && <img src={full}/>}
      </section>
    );
  }
}