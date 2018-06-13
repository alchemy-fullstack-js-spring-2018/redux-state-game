import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createWordArray } from './reducers';
import Letter from './Letter';

class Letters extends Component {

    static propTypes = {
      word: PropTypes.array.isRequired,
    };

    render() {
      const { word } = this.props;

      return (
        <section>
          {word.map((letter, index) => <Letter
            key= {index}
            letter= {letter}
          />)}
        </section>
      );
    }
}

export default connect(
  state => ({
    word: createWordArray(state),
  }),
  null
)(Letters);