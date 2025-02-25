const fs = require('fs'); // fs filesystem commonjs

const data = fs.readFileSync('data/products.csv', 'utf-8');
console.log(data);
console.log(typeof data);
console.log("hallo?")


