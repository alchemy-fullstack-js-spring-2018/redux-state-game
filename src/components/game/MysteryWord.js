import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './MysteryWord.css';

export default class MysteryWord extends PureComponent {
  static propTypes = {
    wordArray: PropTypes.array,
    hits: PropTypes.array
  };

  render() {
    const { wordArray, hits } = this.props;

    return (
      <section className={styles['mystery-word']}>
        {wordArray.map((letter, i) => {
          return <div className="underline" key={i}>
            <h2 className={hits.includes(letter) ? null : 'hidden'} key={i}>{letter}</h2>
          </div>;
        })}
      </section>
    );
  }
}