const times = (n, fn) => {
    const results = Array(n).fill(0);
    results.forEach((x, i, r) => (r[i] = fn(i)));
    return results;
};

console.log(times(3, (i) => i )); // => [2, 3, 4]
console.log(times(5, () => '')); // => ['', '', '', '', '']
console.log(times(5, () => '*').join('')); 
