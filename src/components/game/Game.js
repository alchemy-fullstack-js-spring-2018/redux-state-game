import React, { Component } from 'react';
import Board from './Board';
import Result from './Result';
import { connect } from 'react-redux';
import { getPlayer, getRoundState, ROUND_STATE } from './reducers';
import PropTypes from 'prop-types';

class Game extends Component {

  static propTypes = {
    player: PropTypes.string.isRequired,
    roundState: PropTypes.string.isRequired
  };

  render() {
    const { player, roundState } = this.props;

    return (
      <div>
        <h2>{roundState === ROUND_STATE.PLAYING && (`It's Player ${player}'s turn!`)}</h2>
        <Board/>
        <Result/>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    player: getPlayer(state),
    roundState: getRoundState(state)
  })
)(Game);