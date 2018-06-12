import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { makeGuess } from './actions';


class GameForm extends PureComponent {

  state = {
    guess: '',
  }

  static propTypes = {
    onGuess: PropTypes.func.isRequired,
    makeGuess: PropTypes.func.isRequired,
    limbCount: PropTypes.number,
    chosen: PropTypes.array,
    word: PropTypes.string
  };

  handleChange = ({ target }) => {
    this.setState(({ guess: target.value }), () => {
      this.props.makeGuess(target.value, this.props.chosen);
    });
  };

  render() {
    const { guess } = this.state;
    const { limbCount, chosen } = this.props;

    return (
      <section>
        <span>{limbCount} out of 6 limbs remaining!</span>
        {chosen ? chosen.map((letter, index) => (<div key={index}>{letter}</div>)) : null}
        <br />
        Guess a letter:
        <input type="text" maxLength="1" value={guess} onChange={this.handleChange}/>
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