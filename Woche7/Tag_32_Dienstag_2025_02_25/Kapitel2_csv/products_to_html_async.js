const fs = require('fs');

const STOCK_WARN_AMOUNT = 5;

// Function to convert a CSV record to HTML
const recordToHTML = (record) => {
  const fields = record.split(',');
  const html = `<li class="list-group-item">
    <h2>${fields[1]}</h2>
    <p>${fields[2]}</p>
    <p><strong>Price:</strong> EUR ${fields[4]}</p>
    ${
      Number(fields[3]) <= STOCK_WARN_AMOUNT
        ? '<p class="alert alert-warning">Last items in stock!</p>'
        : ''
    }
  </li>`;

  return html;
};

// Asynchronous version
fs.readFile('data/products.csv', 'UTF8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const products = data.split('\n');
  products.shift(); // remove header

  const entries = products.filter((row) => row !== '').map(recordToHTML);

  console.log('<ul class="list-group">');
  entries.forEach((entry) => console.log(entry));
  console.log('</ul>');

  console.log('ready');
});
