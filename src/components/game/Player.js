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
    makeChoice: PropTypes.func.isRequired
  };



  render() {
    const { index, selection, makeChoice } = this.props;

    console.log('INDEX', index);

    return (
      <div className={styles.player}>
        <h3>Player {index + 1}</h3>
        { selection
          ? <div><img src={selection.image}/>{selection.hp}
          </div> 
          : index === 0 && choices.map(choice => {
            return (
              <a 
                key={choice.name} 
                onClick={() => makeChoice(choice)}
              >
                <img src={choice.image}/>
              </a>
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