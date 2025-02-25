// some, but not all fields are quoted - solution 2/2

const mixedCSV =
  '"very big, soft computer mouse",' + '"the cutest peripheral ever",10,39.90';

let fields = [];

const mixedCSVToArray = (s) =>
  findCommaPositions(',' + s + ',')
    .map((position, i, positions) => s.slice(position, positions[i + 1] - 1))
    .slice(0, -1);

const findCommaPositions = (s) =>
  s
    .split('')
    .reduce(
      (positions, char, position) =>
        char === ',' && isEven(countQuotes(s.slice(0, position)))
          ? positions.concat(position)
          : positions,
      []
    );

const countQuotes = (s) => s.split('').filter((c) => c === '"').length;

const isEven = (num) => num % 2 === 0;

console.log(mixedCSVToArray(mixedCSV));
