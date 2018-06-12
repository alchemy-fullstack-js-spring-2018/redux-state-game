import React, { PureComponent } from 'react';
import Hangman from './Hangman';
import MysteryWord from './MysteryWord';
import WrongLetters from './WrongLetters';
import LetterInput from './LetterInput';

export default class Game extends PureComponent {
  render() {
    return (
      <section>
        <Hangman/>
        <MysteryWord/>
        <button>New Game</button>
        <WrongLetters/>
        <LetterInput/>
      </section>
    );
  }
}