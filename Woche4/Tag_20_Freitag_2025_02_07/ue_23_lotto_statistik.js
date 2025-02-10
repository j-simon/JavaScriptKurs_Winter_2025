'use strict';

const MAX_NUMBER = 49;
const NUMBER_OF_PLAYS = 10000;
const MY_GUESS = [2, 12, 19, 21, 42, 43];

const lottoStats = () =>
    range(NUMBER_OF_PLAYS) // [0, 1 ,2, 3, 4, .. 9999))
        .map(() => numberOfHits(play(), MY_GUESS))  //  0 und 6 // play() [2,5,4,22,34,44] ==[2, 12, 19, 21, 42, 43]
        // [0,3,4,5,2,6,4,5,3,3,4,4,3,3,3,3,..3]
        .reduce(
            (stats, numHits) => {
                stats[numHits] += 1
                return stats
            },
            [0, 0, 0, 0, 0, 0, 0], // initial value [1, 0, 0, 1, 0, 0]
        );

const numberOfHits = (draw, guess) => intersection(draw, guess).length;

const intersection = (a, b) => a.filter(v => b.includes(v));

const play = () => lottoNumbers(6, allLottoNumbers());
const allLottoNumbers = () => range(1, MAX_NUMBER + 1);


const lottoNumbers = (count, remainingLottoNumbers) =>
    times(count, () => pickRandomLottoNumber(remainingLottoNumbers));



const pickRandomLottoNumber = (remainingLottoNumbers) =>
    remainingLottoNumbers.splice(
        randomNumberTo(remainingLottoNumbers.length),
        1,
    )[0];







const randomNumberTo = (n) => Math.floor(Math.random() * n);






const range = (startOrEnd, end, step) =>
    end
        ? rangeFromStartToEnd(startOrEnd, end, step)
        : rangeFromStartToEnd(0, startOrEnd);

const rangeFromStartToEnd = (start, end, step = 1) => {
    const length = Math.max(Math.ceil((end - start) / step), 0);
    const results = Array(length).fill(0);
    results.forEach((x, i, r) => (r[i] = start + i * step));
    return results;
};

const times = (n, fn) => {
    const results = Array(n).fill(0);
    results.forEach((x, i, r) => (r[i] = fn(i)));
    return results;
};

console.log(lottoStats());
