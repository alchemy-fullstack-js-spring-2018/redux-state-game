import React, { Component } from 'react';
import styles from './Game.css';
import logo from '../img/alchemy.png';

export default class Game extends Component {
  render() {
    return (
      <section className={styles['game-container']}>
        <table className={styles['game-table']}>
          <tbody>
            <tr>
              <td className={styles.slot}>
                <img src={logo} />
              </td>
              <td className={styles.slot}>
                <img src={logo} />
              </td>
              <td className={styles.slot}>
                <img src={logo} />
              </td>
              <td className={styles.slot}>
                <img src={logo} />
              </td>
              <td className={styles.slot}>
                <img src={logo} />
              </td>
              <td className={styles.slot}>
                <img src={logo} />
              </td>
              <td className={styles.slot}>
                <img src={logo} />
              </td>
              <td className={styles.slot}>
                <img src={logo} />
              </td>
            </tr>
            <tr>
              <td className={styles.slot}>
                <img src={logo} />
              </td>
              <td className={styles.slot}>
                <img src={logo} />
              </td>
              <td className={styles.slot}>
                <img src={logo} />
              </td>
              <td className={styles.slot}>
                <img src={logo} />
              </td>
              <td className={styles.slot}>
                <img src={logo} />
              </td>
              <td className={styles.slot}>
                <img src={logo} />
              </td>
              <td className={styles.slot}>
                <img src={logo} />
              </td>
              <td className={styles.slot}>
                <img src={logo} />
              </td>
            </tr>
            <tr>
              <td className={styles.slot}>
                <img src={logo} />
              </td>
              <td className={styles.slot}>
                <img src={logo} />
              </td>
              <td className={styles.slot}>
                <img src={logo} />
              </td>
              <td className={styles.slot}>
                <img src={logo} />
              </td>
              <td className={styles.slot}>
                <img src={logo} />
              </td>
              <td className={styles.slot}>
                <img src={logo} />
              </td>
              <td className={styles.slot}>
                <img src={logo} />
              </td>
              <td className={styles.slot}>
                <img src={logo} />
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    );
  }
}