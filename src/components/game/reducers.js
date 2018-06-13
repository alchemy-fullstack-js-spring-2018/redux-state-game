export const SELECTION = 'SELECTION';
export const NEW_ROUND = 'NEW_ROUND';
export const COUNTER = 'COUNTER';


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

  if(one.hp >= 1 && two.hp >= 1) return ROUND_STATE.PLAYING;

  if(one.hp >= 1 && two.hp <= 0) return ROUND_STATE.WIN;

  return ROUND_STATE.LOSE;
  
};

const initSelections = () => [];
export function selections(state = initSelections(), { type, payload }) {
  switch (type) {
    case SELECTION: {
      const copy = [...state];
      const { name, hp, attack, image } = payload.choice;
      copy[payload.index] = { name, hp, attack, image };
      return copy;
    }
    case NEW_ROUND: {
      return initSelections();
    }
    default:
      return state;
  }
}
const prevState = [];
export function hpTracker(state = prevState, { type, payload }) {
  switch (type) {
    case COUNTER: {
      state[1].hp = payload;
      return {
        state
      };
    }
    default:
      return state;
  }
}