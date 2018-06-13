import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Letter extends Component {

    static propTypes = {
      letter: PropTypes.string.isRequired,
      hit: PropTypes.bool.isRequired,
    };

    render() {
      const { letter, hit } = this.props;
      return (
        <div className="letter">
          <span className={hit ? null : 'hidden'}>{letter}</span>
        </div>
      );
    }
}