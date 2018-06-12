import React, { Component } from 'react';
import PropTypes from 'prop-types';



export default class GameForm extends Component {

  state = {
    guess: '',
    chosenLocal: []
  }

  static propTypes = {
    onGuess: PropTypes.func.isRequired,
    limbCount: PropTypes.number,
    chosen: PropTypes.array
  };

  componentDidMount = () => {
    

  };

  handleChange = ({ target }) => {
    this.setState(({ guess: target.value }, ()=> {
      this.props.onGuess(target.value);
    }));
  };

  render() {
    const { guess } = this.state;
    const { limbCount, chosen } = this.props;

    return (
      <section>
        <span>{limbCount} out of 6 limbs remaining!</span>
        {chosen ? chosen.map((letter, index) => <div key={index}>{letter}</div>) : null}
        <br />
        Guess a letter:
        <input type="text" maxLength="1" value={guess} onChange={this.handleChange}/>
      </section>
    );
  }
}