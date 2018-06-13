import { IMAGES_LOAD, CARD_SELECTED } from './reducers';

import imageOne from '../img/01.jpg';
import imageTwo from '../img/02.jpg';
import imageThree from '../img/03.jpg';
import imageFour from '../img/04.jpg';
import imageFive from '../img/05.jpg';
import imageSix from '../img/06.jpg';
import imageSeven from '../img/07.jpg';
import imageEight from '../img/08.jpg';
import imageNine from '../img/09.jpg';
import imageTen from '../img/10.jpg';
import imageEleven from '../img/11.jpg';
import imageTwelve from '../img/12.jpg';

const images = [
  imageOne, imageOne,
  imageTwo, imageTwo,
  imageThree, imageThree,
  imageFour, imageFour,
  imageFive, imageFive,
  imageSix, imageSix,
  imageSeven, imageSeven,
  imageEight, imageEight,
  imageNine, imageNine,
  imageTen, imageTen,
  imageEleven, imageEleven,
  imageTwelve, imageTwelve
];

const shuffle = (array) => {
  let currentIndex = array.length;
  let temporaryValue;
  let randomIndex;

  while(0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
};

export const loadImages = () => {
  const arrayOfImageArrays = [];
  const shuffledImages = shuffle(images);

  arrayOfImageArrays.push(shuffledImages.slice(0, 8));
  arrayOfImageArrays.push(shuffledImages.slice(8, 16));
  arrayOfImageArrays.push(shuffledImages.slice(16, 24));

  return {
    type: IMAGES_LOAD,
    payload: arrayOfImageArrays
  };
};

export const selectCard = (card) => {
  const cardDetail = card.target.src.slice(22);

  return {
    type: CARD_SELECTED,
    payload: cardDetail
  };
};
