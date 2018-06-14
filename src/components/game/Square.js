import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Square.css';
import { connect } from 'react-redux';
import { getRoundState, ROUND_STATE } from './reducers';

class Square extends Component {

  static propTypes = {
    label: PropTypes.string.isRequired,
    selectSquare: PropTypes.func.isRequired,
    value: PropTypes.number.isRequired,
    roundState: PropTypes.string.isRequired
  };

  render() {
    const { label, selectSquare, value, roundState } = this.props;

    return (
      <button className={styles.square} value={value} onClick={selectSquare} 
        disabled={label !== ' ' || roundState !== ROUND_STATE.PLAYING}>
        {label}
      </button>
    );
  }
}

export default connect(
  (state) => ({
    roundState: getRoundState(state)
  })
)(Square);