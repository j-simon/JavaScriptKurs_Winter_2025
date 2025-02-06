// 'use strict';
// const times = (n, fn) => {
//     const results = Array(n).fill(0);
//     results.forEach((x, i, r) => (r[i] = fn(i)));
//     return results;
// };



// const rectangle = (width, height, character) =>
//     (height === 0)
//         ? ''
//         : `${rectangle(width, height - 1, character)}\n${line(
//               width,
//               character,
//           )}`;


// const line = (length, character) =>
//     length === 0 ? '' : line(length - 1, character) + character;


// console.log(rectangle(50, 12, '*'));

'use strict';

const rectangle = (width, height, character) =>
    times(height, () => line(width, character)).join("\n") // /                                                  .join('\n');

const line = (length, character) => times(length, () => character).join('');

const rectangle2 = (width, height, character) =>  times(height, () =>times(width, () => character).join('') ).join("\n") // /                                                  .join('\n');

// const line2 = (length, character) => times(length, () => character).join('');

const times = (n, fn) => {
    const results = Array(n).fill(0);
    results.forEach((x, i, r) => (r[i] = fn(i)));
    return results;
};

console.log(rectangle2(10, 3, '*'));
