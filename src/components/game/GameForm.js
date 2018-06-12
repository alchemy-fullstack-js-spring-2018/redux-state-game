import React, { Component } from 'react';
import PropTypes from 'prop-types';



export default class GameForm extends Component {

  state = {
    guess: '',
  }

  static propTypes = {
    onGuess: PropTypes.func.isRequired
  };

  handleChange = ({ target }) => {
    this.setState(({ guess: target.value }, ()=> {
      this.props.onGuess(target.value);
    }));
  };

  render() {
    const { guess } = this.state;

    return (
      <section>
        Guess a letter:
        <input type="text" maxLength="1" value={guess} onChange={this.handleChange}/>
      </section>
    );
  }
}