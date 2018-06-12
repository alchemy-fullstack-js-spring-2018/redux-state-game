import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPlayerSelection } from './reducers';
import { makeChoice } from './actions';
import { choices } from './Choices';
import styles from './Player.css';

class Player extends PureComponent {

  static propTypes = {
    index: PropTypes.number.isRequired,
    selection: PropTypes.object,
    // choices: PropTypes.array,
    makeChoice: PropTypes.func.isRequired
  };

  render() {
    const { index, selection, makeChoice } = this.props;
    console.log('SELECTION', selection);
    console.log('CHOICES', choices);

    return (
      <div className={styles.player}>
        <h3>Player {index + 1}</h3>
        { selection
          ? <p>{selection.name}{selection.hp}</p>
          : index === 0 && choices.map(choice => {
            return (
              <button 
                key={choice.name} 
                onClick={() => makeChoice(choice)}
              >
                {choice.name}
              </button>
            );
          })
        }
      </div>
    );
  }
}

export default connect(
  (state, { index }) => ({
    selection: getPlayerSelection(index, state)
  }),
  { makeChoice }
)(Player);