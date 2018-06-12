export const GUESS = 'GUESS';

export function guesses(state = [], { type, payload }) {
  switch(type) {
    case GUESS:
      return [...state, payload.guess];
    default:
      return state;
  }
}