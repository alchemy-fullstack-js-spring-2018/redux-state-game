import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import styles from './Player.css';

class Player extends PureComponent {

  static propTypes = {
    index: PropTypes.number.isRequired
  };

  render() {
    const { index } = this.props;

    return (
      <div className={styles.player}>
        <h3>Player {index + 1}</h3>
        {['rock', 'paper', 'scissors'].map(choice => {
          return <button key={choice}>{choice}</button>;
        })}
      </div>
    );
  }
}