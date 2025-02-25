const fs = require('fs');

fs.readFile('products.csv', 'UTF8', (error, data) => {
  console.log(data);
});
