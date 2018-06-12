import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { newGame, newGuess } from './actions';
import { getGuessed, findMisses, getGameState } from './reducers';

class GameStatus extends Component {

  state = {
    guess: '',
    alreadyGuessed: false,
  }

  static propTypes = {
    newGame: PropTypes.func.isRequired,
    newGuess: PropTypes.func.isRequired,
    guessed: PropTypes.array.isRequired,
    misses: PropTypes.array.isRequired,
    gameState: PropTypes.string.isRequired,
  };

  handleChange = ({ target }) => {
    this.setState({ guess: target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const guess = this.state.guess;
    const guessed = this.props.guessed;
    if(guessed.includes(guess)) { 
      return this.alreadyGuessed(); }

    this.setState(({ guess: '', alreadyGuessed: false }), () => {
      this.props.newGuess(guess, guessed);
    });
  };

  alreadyGuessed = () => {
    this.setState(({ alreadyGuessed: true }));
  }

  render() {
    const { guess, alreadyGuessed } = this.state;
    const { newGame, misses, gameState } = this.props;

    const guessLetter = (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="letter-guess">Letter :
          <input type="text" maxLength="1" value={guess} onChange={this.handleChange}/>
          <button type="submit">Guess!</button>
        </label>
      </form>);

    return (
      <section>
        {misses ? misses.map((letter, index) => (<div key={index}>{letter}</div>)) : null}
        <br />
        {gameState === 'PLAYING' ? guessLetter : null}
        {alreadyGuessed ? <span> You already guessed {guess}! </span> : null}
        <button onClick={newGame}>New Game</button>
      </section>
    );
  }
}

export default connect(
  state => ({
    guessed: getGuessed(state),
    misses: findMisses(state),
    gameState: getGameState(state),
  }),
  { newGame, newGuess }
)(GameStatus);