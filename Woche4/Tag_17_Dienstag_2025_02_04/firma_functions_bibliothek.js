'use strict';
const line = (length, character) =>
    length === 0 ? '' : line(length - 1, character) + character;

const times = (n, fn) => {
    const results = Array(n).fill(0);
    results.forEach((x, i, r) => (r[i] = fn(i)));
    return results;
};