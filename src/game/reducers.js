export const GUESS = 'GUESS';
export const NEW_GAME = 'NEW_GAME';

export function guesses(state = [], { type, payload }) {
  switch(type) {
    case GUESS:
      return [...state, payload.guess];
    case NEW_GAME:
      return [];
    default:
      return state;
  }
}