
const range = (startOrEnd, end, step = 1) => {
    const start = end !== undefined ? startOrEnd : 0;
    const stop = end !== undefined ? end : startOrEnd;
    
    
    const length = Math.max(Math.ceil((stop - start) / step), 0);
    const results = Array(length).fill(0);
    results.forEach((x, i, r) => (r[i] = start + i * step));
    // results.forEach((_, i) => (results[i] = start + i * step));  // => alternativ: x wird hier nicht benötigt (daher Platzhalter _), r kann direkt als results angegeben werden
    return results;
};
 


console.log(range(5));              // => [ 0, 1, 2, 3, 4 ]     1 Argument
console.log(range(2, 7));           // => [ 2, 3, 4, 5, 6 ]     2 Argumente
console.log(range(2, 4, 0.5));     // => [ 2, 2.5, 3, 3.5 ]   3 Argumente
console.log(range(5, 0, -1));      // => [ 5, 4, 3, 2, 1 ]     Negativ-Step
 