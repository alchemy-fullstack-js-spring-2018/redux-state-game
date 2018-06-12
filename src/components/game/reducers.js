export const SELECTION = 'SELECTION';
export const NEW_ROUND = 'NEW_ROUND';

export const ROUND_STATE = {
  CHOOSING: 'CHOOSING',
  PLAYING: 'PLAYING',
  WIN: 'WIN',
  LOSE: 'LOSE'
};

export const getSelections = state => state.selections;
export const getPlayerSelection = (index, state) => getSelections(state)[index];
export const getRoundState = state => {
  const [one, two] = getSelections(state);

  if(!one || !two) return ROUND_STATE.CHOOSING;

};

const initSelections = () => [];
export function selections(state = initSelections(), { type, payload}) {
  switch (type) {
    default:
      return state;
  }
}