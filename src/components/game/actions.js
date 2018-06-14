import {
  SELECTION, 
  TURN,
  getRoundState,
  ROUND_STATE,
  TALLY_ROUND,
  NEW_ROUND
} from './reducers';

export const makeSelection = (index, player) => {
  return (dispatch, getState) => {
    dispatch({
      type: SELECTION,
      payload: { index: index, player: player }
    });

    dispatch({
      type: TURN
    });

    const state = getState();
    const roundState = getRoundState(state);

    if(roundState !== ROUND_STATE.PLAYING) {
      dispatch({
        type: TALLY_ROUND,
        payload: roundState
      });
    }
  };
};

export const newRound = () => ({ type: NEW_ROUND });