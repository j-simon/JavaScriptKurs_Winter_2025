'use strict';

let startsWithLetterF =  game => game.startsWith("F");

let boardgames = [
  'Caverna',
  'Puerto Rico',
  'Agricola',
  'Black Friday',
  'Funny Friends',
  'Fauna',
  'Eclipse',
  'Codenames',
  'Dominion',
  'Fairy Tale',
  'Fast Flowing Forest Fellers',
  'Fearsome Floors'
];

let boardgamesStartingWithF = boardgames.filter(startsWithLetterF)/* ??? */

console.log(boardgamesStartingWithF); // => [ 'Funny Friends', 'Fauna', 'Fairy Tale', 'Fast Flowing Forest Fellers', 'Fearsome Floors']

// filter