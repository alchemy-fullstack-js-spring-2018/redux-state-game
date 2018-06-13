import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { newGuess } from './actions';
import { getGuessed } from './reducers';
import { connect } from 'react-redux';


class Key extends Component {

    static propTypes = {
      letter: PropTypes.string.isRequired,
      newGuess: PropTypes.func.isRequired,
      guessed: PropTypes.array.isRequired
    };

    render() {
      const { newGuess, letter } = this.props;
      return (
        <button type="button" 
          key={letter}
          onClick={() => newGuess(letter)}
          className="key"
          disabled={this.props.guessed.includes(letter)}>
          {letter}
        </button>
      );
    }
}

export default connect(
  state => ({
    guessed: getGuessed(state),
  }),
  { newGuess }
)(Key);