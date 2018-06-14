export const SELECTION = 'SELECTION';
export const TURN = 'TURN';
export const NEW_ROUND = 'NEW_ROUND';
export const TALLY_ROUND = 'TALLY_ROUND';

export const ROUND_STATE = {
  PLAYING: 'PLAYING',
  WIN_X: 'WIN_X',
  WIN_O: 'WIN_O',
  TIE: 'TIE'
};
export const getMatch = state => state.match;
export const getBoard = state => state.selections;
export const getPlayer = state => state.turn;
export const getRoundState = state => {
  
  const board = getBoard(state);
  const [sq0, sq1, sq2, sq3, sq4, sq5, sq6, sq7, sq8] = board;

  const winOne = [sq0, sq1, sq2];
  const winTwo = [sq3, sq4, sq5];
  const winThree = [sq6, sq7, sq8];

  const winFour = [sq0, sq3, sq6];
  const winFive =  [sq1, sq4, sq7];
  const winSix =  [sq2, sq5, sq8];

  const winSeven =  [sq0, sq4, sq8];
  const winEight =  [sq2, sq4, sq6];

  const win = (arr) =>  {
    const xWin = arr.every(square => square === 'X');
    const oWin = arr.every(square => square === 'O');

    if(xWin) return ROUND_STATE.WIN_X;
    if(oWin) return ROUND_STATE.WIN_O;
    return false;
  };
  
  if(win(winOne)) return win(winOne);
  if(win(winTwo)) return win(winTwo);
  if(win(winThree)) return win(winThree);
  if(win(winFour)) return win(winFour);
  if(win(winFive)) return win(winFive);
  if(win(winSix)) return win(winSix);
  if(win(winSeven)) return win(winSeven);
  if(win(winEight)) return win(winEight);

  if(board.includes(' ')) return ROUND_STATE.PLAYING;

  return ROUND_STATE.TIE;
};

const initBoard = () => [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
const initPlayer = () => 'X';

export function selections(state = initBoard(), { type, payload }) {
  switch (type) {
    case SELECTION: {
      const copy = [...state];
      copy[payload.index] = payload.player;
      return copy;
    }
    case NEW_ROUND: {
      return initBoard();
    }
    default:
      return state;
  }
}

export function turn(state = initPlayer(), { type }) {
  switch (type) {
    case TURN: {
      const copy = state;
      return copy === 'X' ? 'O' : 'X';
    }
    default:
      return state;
  }
}

export const initMatch = () => ({
  [ROUND_STATE.WIN_X]: 0,
  [ROUND_STATE.WIN_O]: 0,
  [ROUND_STATE.TIE]: 0
});

export function match(state = initMatch(), { type, payload }) {
  switch (type) {
    case TALLY_ROUND:
      return {
        ...state,
        [payload]: state[payload] + 1
      };
    default:
      return state;
  }
}