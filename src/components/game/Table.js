import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './Table.css';
import { loadImages } from './actions';
import Card from './Card';


class Table extends Component {
  static propTypes = {
    images: PropTypes.array,
    loadImages: PropTypes.func,
    card: PropTypes.any,
    checkMatch: PropTypes.func,
    getCard: PropTypes.func
  };

  state = {
    secondChoice: false,
    firstCard: null,
    match: false
  };

  componentDidMount() {
    this.props.loadImages();
  }

  handleSelection = (card) => {
    if(!this.state.secondChoice) {
      this.setState({ firstCard: card.slice(22) });
      this.setState({ secondChoice: true });
    } else {
      if(this.state.firstCard === card.slice(22)) {
        this.setState({ match: 'Match!' });
      }
      this.setState({ secondChoice: false });
    } 
  };

  render() {
    const { images, loadImages } = this.props;

    return (
      <div>
        <p>Match?: {this.state.match && this.state.match}</p>
        <button onClick={(card) => loadImages(card)}>New Game</button>
        <table className={styles['game-table']}>
          <tbody>
            <tr>
              {images && images[0].map((image, i) => (
                <Card
                  key={i}
                  image={image}
                  index={i}
                  handleSelection={this.handleSelection}
                  handleCheckMatch={this.handleCheckMatch}
                />
              ))}
            </tr>
            <tr>
              {images && images[1].map((image, i) => (
                <Card key={i} image={image} index={i} handleSelection={this.handleSelection}/>
              ))}
            </tr>
            <tr>
              {images && images[2].map((image, i) => (
                <Card key={i} image={image} index={i} handleSelection={this.handleSelection}/>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default connect(
  state => (
    { images: state.images, card: state.card }
  ),
  { loadImages }
)(Table);