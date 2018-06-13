import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Letter.css';

export default class Letter extends Component {

    static propTypes = {
      letter: PropTypes.string.isRequired,
    };

    render() {
      const { letter } = this.props;
      return (
        <div className={styles.letter}>
          {letter}
        </div>
      );
    }
}