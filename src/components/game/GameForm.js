import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { makeGuess } from './actions';


class GameForm extends Component {

  state = {
    guess: '',
    alreadyGuessed: false,
  }

  static propTypes = {
    onGuess: PropTypes.func.isRequired,
    makeGuess: PropTypes.func.isRequired,
    limbCount: PropTypes.number,
    chosen: PropTypes.array,
    word: PropTypes.string
  };

  handleChange = ({ target }) => {
    this.setState({ guess: target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const guess = this.state.guess;
    if(this.props.chosen.includes(guess)) { 
      return this.alreadyGuessed(); }
    this.setState(({ guess: '', alreadyGuessed: false }), () => {
      this.props.makeGuess(guess, this.props.chosen);
    });
  };


  alreadyGuessed = () => {
    this.setState(({ alreadyGuessed: true }));
  }

  render() {
    const { guess, alreadyGuessed } = this.state;
    const { limbCount, chosen } = this.props;

    return (
      <section>
        <span>{limbCount} out of 6 limbs remaining!</span>
        {chosen ? chosen.map((letter, index) => (<div key={index}>{letter}</div>)) : null}
        <br />
        Guess a letter:
        <form onSubmit={this.handleSubmit}>
          <input type="text" maxLength="1" value={guess} onChange={this.handleChange}/>
          <button type="submit">Guess!</button>
        </form>
        {alreadyGuessed ? <span> You already guessed {guess}! </span> : null}
      </section>
    );
  }
}

export default connect(
  state => ({
    word: state.handleGame.word,
    limbCount: state.handleGame.limbCount,
    chosen: state.handleGame.chosen,
  }),
  { makeGuess }
)(GameForm);