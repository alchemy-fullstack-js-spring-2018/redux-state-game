import React, { Component } from 'react';
import { connect } from 'react-redux';
import { newGame, newRound, saveGame, loadGame } from './actions';
import { getGameState, getWordBank } from './reducers';
import PropTypes from 'prop-types';
import styles from './Player.css';

class Player extends Component {
    static propTypes = {
      newGame: PropTypes.func.isRequired,
      newRound: PropTypes.func.isRequired,
      saveGame: PropTypes.func.isRequired,
      loadGame: PropTypes.func.isRequired,
      gameState: PropTypes.string.isRequired,
      wordBank: PropTypes.array.isRequired,
      wins: PropTypes.number.isRequired,
      losses: PropTypes.number.isRequired,
    };

    state= {
      id: '',
      saves: [],
    };

    openSave = () => {
      document.getElementById('modal').style.display = 'block';
      document.getElementById('save').style.display = 'flex';
    };

    openLoad = () => {
      document.getElementById('modal').style.display = 'block';
      document.getElementById('load').style.display = 'flex';

      let newSaves = [];
      this.setState({ saves: newSaves }, () => {
        const loadedSaves = JSON.parse(localStorage.getItem('saves'));
        this.setState({ saves: loadedSaves });
      });
    };

    closeModal = () => {
      document.getElementById('modal').style.display = 'none';
      document.getElementById('save').style.display = 'none';
      document.getElementById('load').style.display = 'none';
    };

    handleChange = ({ target }) => {
      this.setState({ id: target.value });
    };
  
    handleSave = event => {
      event.preventDefault();
      this.props.saveGame(this.state.id);
      this.closeModal();
    };

    handleLoad = id => {
      event.preventDefault();
      this.setState({ id: id });
      this.props.loadGame(id);
      this.closeModal();
    };

    render() {
      const { newGame, newRound, gameState, wordBank, wins, losses } = this.props;
      const { handleLoad } = this;
      const { id, saves } = this.state;
      const wordsPlayed = 10 - wordBank.length;

      const loadModal = (
        <div className="modal-content" id="load">

          {saves.length ? saves.map((save, index) =>
            <div key={index}><span>{save.id} at {save.timestamp}</span>
              <button type="button" onClick={() => handleLoad(save.id)}>Load me!</button></div>) : 'No saves, yet!'}
          <br/>  
          <button onClick={this.closeModal}>Cancel</button>

        </div>);

      const saveModal = (
        <div className="modal-content" id="save">

          <span>Name your save:
            <input type="text" name="save-id" value={id} onChange={this.handleChange}/>
          </span>
          <button onClick={this.closeModal}>Cancel</button>
          <button onClick={this.handleSave}>Save</button>

        </div>);

      const beforeGame = (
        <section className={styles.player}>
          <button onClick={newGame}>New Game</button>
          <button name="load" onClick={this.openLoad}>Load Game</button>
          <div id="modal">
            {loadModal}
          </div>
        </section>);

      return gameState === 'BLANK' ? beforeGame : (
        <section className={styles.player}>
          <div id="game-status">
            <strong>Round {wordsPlayed - 1} of 10! Wins: {wins} && Losses: {losses}</strong>
          </div>
          
          <button onClick={newGame}>New Game</button>
          <button onClick={newRound}>Next Round</button>
          <button name="save" onClick={this.openSave}>Save Game</button>
          <button name="load" onClick={this.openLoad}>Load Game</button>

          <div id="modal">
            {saveModal}
            {loadModal}
          </div>

        </section>
      );
    }
}

export default connect(
  state => ({
    gameState: getGameState(state),
    wordBank: getWordBank(state),
    wins: state.tally.WIN,
    losses: state.tally.LOSE,
  }),
  { newGame, newRound, saveGame, loadGame }
)(Player);