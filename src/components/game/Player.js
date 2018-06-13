import React, { Component } from 'react';
import { connect } from 'react-redux';
import { newGame, newRound, saveGame, loadGame } from './actions';
import { getGameState, getWins, getWordBank } from './reducers';
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
    };

    state= {
      id: '',
      saves: [],
    };

    openSave = () => {
      document.getElementById('modal').style.display = 'block';
      document.getElementById('save').style.display = 'block';
    };

    openLoad = () => {
      document.getElementById('modal').style.display = 'block';
      document.getElementById('load').style.display = 'block';

      let newSaves = [];
      this.setState({ saves: newSaves }, () => {
        for(let i = 0, len = localStorage.length; i < len; ++i) {
          newSaves.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
        this.setState({ saves: newSaves });
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
      const { newGame, newRound, gameState, wordBank, wins } = this.props;
      const { handleLoad } = this;
      const { id, saves } = this.state;
      const wordsPlayed = 10 - wordBank.length;
      const losses = wordsPlayed - wins;

      const beforeGame = (<button onClick={newGame}>New Game</button>);

      return gameState === 'BLANK' ? beforeGame : (
        <section className={styles.player}>
          <div id="game-status">
            {wordBank.length} out 10 words remaining!
            Wins: {wins}
            Losses: {losses}
          </div>
          <button onClick={newGame}>New Game</button>
          <button onClick={newRound}>Next Round</button>
          <button name="save" onClick={this.openSave}>Save Game</button>
          <button name="load" onClick={this.openLoad}>Load Game</button>

          <div id="modal">
            <div className="modal-content" id="save">
              Name your save:
              <input type="text" name="save-id" value={id} onChange={this.handleChange}/>
              <button onClick={this.closeModal}>Cancel</button>
              <button onClick={this.handleSave}>Save</button>
            </div>
            <div className="modal-content" id="load">
              {saves.length ? saves.map((save, index) =>
                <div key={index}><span>Save: {save.id} at {save.timestamp.toString()}</span>
                  <button type="button" onClick={() => handleLoad(save.id)}>Pick me!</button></div>) : 'No saves, yet'}
              <input type="text" name="save-id" value={id} onChange={this.handleChange}/>
              <button onClick={this.closeModal}>Cancel</button>
            </div>
          </div>

        </section>
      );
    }
}

export default connect(
  state => ({
    gameState: getGameState(state),
    wordBank: getWordBank(state),
    wins: getWins(state)
  }),
  { newGame, newRound, saveGame, loadGame }
)(Player);