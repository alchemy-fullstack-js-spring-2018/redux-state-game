import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createWordArray, findHits } from './reducers';
import Letter from './Letter';

class Letters extends Component {

    static propTypes = {
      word: PropTypes.array.isRequired,
      hits: PropTypes.array.isRequired
    };

    render() {
      const { word, hits } = this.props;

      return (
        <section> 
          {word.map((letter, index) => <Letter
            key= {index}
            letter= {letter}
            hit={hits.includes(letter)}
          />)}
        </section>
      );
    }
}

export default connect(
  state => ({
    word: createWordArray(state),
    hits: findHits(state)
  }),
  null
)(Letters);