'use strict';
/* ab hier range */
const rangeFromStartToEnd = (start, end, step = 1) => {
    const length = Math.max(Math.ceil((end - start) / step), 0);
    const results = Array(length).fill(0);
    results.forEach((x, i, r) => (r[i] = start + i * step));
    return results;
};

const range = (startOrEnd, end, step) =>
    end
        ? rangeFromStartToEnd(startOrEnd, end, step)
        : rangeFromStartToEnd(0, startOrEnd);

// 1 Gib die Zahlen von 70 bis 130 in der Konsole aus.
console.log(range(70, 131, 1));

// 2 Lass JS nun von 200 bis 20 rückwärts zählen.
console.table(range(200, 19, -1));

// 3 Gib alle geraden Zahlen von 10 bis 50 in der Konsole aus
console.log(range(10, 51 , 2))