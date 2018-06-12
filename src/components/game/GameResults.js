import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getRoundState, ROUND_STATE } from './reducers';
import { newRound } from './actions';

const {  CHOOSING, PLAYING, WIN, LOSE } = ROUND_STATE;

const message = {
  [CHOOSING]: 'Make your selection',
  [PLAYING]: 'Keep fighting',
  [WIN]: 'You won!',
  [LOSE]: 'Sad day, you lost :('
};

class GameResults extends Component {

  static propTypes = {
    roundState: PropTypes.string.isRequired,
    newRound: PropTypes.func.isRequired,
  };

  render() {
    const { roundState, newRound } = this.props;
    return (
      <section>
        {/* <p>{message[roundState]}</p> */}
        { roundState === CHOOSING || 
          <div>
            {message[roundState]}
            <button onClick={() => attackPlayer2(selection)}>Attack</button>
          </div>
        }
        { roundState === CHOOSING || PLAYING ||
          <button onClick={newRound}>Play Again</button>
        }
      </section>
    );
  }
}

export default connect(
  state => ({
    roundState: getRoundState(state),
  }),
  { newRound }
)(GameResults);
