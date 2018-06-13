import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Limb.css';

export default class Game extends Component {
    static propTypes = {
      data: PropTypes.object.isRequired,
    };

    render() {
      const { data } = this.props;
      const { type, image } = data;
      return (
        <section className={[styles.limb, type].join(' ')}>
          <img src={image}/>
        </section>
      );
    }
}