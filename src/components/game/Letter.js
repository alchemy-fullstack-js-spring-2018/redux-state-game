import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Letter.css';

export default class Letter extends Component {

    static propTypes = {
      letter: PropTypes.string.isRequired,
      hit: PropTypes.bool.isRequired,
    };

    render() {
      const { letter, hit } = this.props;
      return (
        <div className={styles.letter}>
          <span className={hit ? null : 'hidden'}>{letter}</span>
        </div>
      );
    }
}