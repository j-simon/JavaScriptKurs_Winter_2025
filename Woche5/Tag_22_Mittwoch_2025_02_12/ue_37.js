'use strict';

const triangle = ({ height, topLineWidth = 1, character = "*" } = { height: 5, topLineWidth: 1, character: "*" }) =>
    topLineWidth > height
        ? ''
        : `${line(topLineWidth, character)}\n${triangle({
            height: height, // unnötig  !
            topLineWidth: topLineWidth + 1,
            character, // Kurzform!
        })}`;

const line = (length, character) =>
    length === 0 ? '' : character + line(length - 1, character);

//console.log(triangle(  10    )); // 1 number
// console.log(triangle(    { height: 10 }     )); // 1 objekt
// console.log(triangle({ height: 10, character: '#' })); // 1 : objekt
console.log(triangle())