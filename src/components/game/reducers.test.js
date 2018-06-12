import { getGameState, newMatch, handleGame, NEW_GAME, NEW_ROUND, NEW_GUESS, TALLY_ROUND } from './reducers';

it('has a default value of an object with properties', () => {
    const state = newMatch(undefined, {});
    expect(state).toEqual({
        limbCount: 0,
        word: '',
        chosen: '',
        guess: '',    });
  });

  it('gets current s, )
