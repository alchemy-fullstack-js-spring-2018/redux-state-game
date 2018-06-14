import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { newRound } from './actions';
import { getMatch, getRoundState, ROUND_STATE } from './reducers';

const { PLAYING, TIE, WIN_O, WIN_X } = ROUND_STATE;

const message = {
  [PLAYING]: 'Choose a square',
  [WIN_O]: 'Player O has won!',
  [WIN_X]: 'Player X has won!',
  [TIE]: 'Cat\'s game!'
};

class Result extends Component {

  static propTypes = {
    roundState: PropTypes.string.isRequired,
    match: PropTypes.object.isRequired,
    newRound: PropTypes.func.isRequired
  };

  render() {
    const { roundState, match, newRound } = this.props;

    return (
      <div>
        <p>
          Win Player X: {match[WIN_X]}&nbsp;
          Win Player O: {match[WIN_O]}&nbsp;
          Tie: {match[TIE]}
        </p>
        <p>{message[roundState]}</p>
        { roundState === PLAYING ||
          <button onClick={newRound}>Play Again</button>
        }
      </div>
    );
  }
}

export default connect(
  state => ({
    roundState: getRoundState(state),
    match: getMatch(state)
  }),
  { newRound }
)(Result);