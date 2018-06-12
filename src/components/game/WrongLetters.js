import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './WrongLetters.css';

export default class WrongLetters extends PureComponent {
  static propTypes = {
    misses: PropTypes.array
  };

  render() {
    const { misses } = this.props;

    return (
      <section className={styles['wrong-letters']}>
        <h3>Misses:</h3>
        {misses.map((letter, i) => <div className="letter-holder" key={i}><h2 key={i}>{letter}</h2></div>)}
      </section>
    );
  }
}