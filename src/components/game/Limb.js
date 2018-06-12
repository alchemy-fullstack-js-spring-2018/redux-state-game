import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Game extends Component {
    static propTypes = {
      data: PropTypes.object.isRequired,
    };

    render() {
      const { data } = this.props;
      const { type, visibility } = data;
      return (
        <section className={`limb ${type} ${visibility}`}>
          {type}
        </section>
      );
    }
}