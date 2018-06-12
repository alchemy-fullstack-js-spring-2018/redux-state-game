function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


export const choices = [
  {
    name: 'bulb',
    hp: 10,
    attack: getRandomInt(1, 4),
    image: 'https://img.pokemondb.net/sprites/black-white/anim/normal/bulbasaur.gif'
  },
  {
    name: 'char',
    hp: 10,
    attack: getRandomInt(1, 4),
    image: 'https://img.pokemondb.net/sprites/black-white/anim/normal/charmander.gif'
  },
  {
    name: 'squirt',
    hp: 10,
    attack: getRandomInt(1, 4),
    image: 'https://img.pokemondb.net/sprites/black-white/anim/normal/squirtle.gif'
  }
];