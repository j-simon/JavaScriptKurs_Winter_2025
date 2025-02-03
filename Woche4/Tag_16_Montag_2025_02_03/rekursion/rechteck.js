'use strict';
const line = (length, character) =>
    length === 0 
        ? ''
        : line(length - 1, character) + character;


const rectangle = (width, height, character) =>
    height === 0
        ? ''
        : `${rectangle(width, height - 1, character)}\n${line(width,character, )}`;



console.log(rectangle(3, 6, '-'));
