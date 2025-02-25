const fs = require('fs'); // commonjs

const data = fs.readFileSync('data/products.csv', 'utf-8');

console.log(data);
