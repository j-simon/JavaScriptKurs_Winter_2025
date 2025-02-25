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

  writeToFile(entries);
});

const writeToFile = (entries) => {
  const headerStr = `<!DOCTYPE html>
<html lang="de">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Products</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />
  </head>
  <body>
    <main>
      <div class="container py-5">`;
  const footerStr = `</div>
    </main>
    <script>
      'use strict';
      
    </script>
  </body>
</html>`;

  const html = `${headerStr}
    <ul class="list-group">
    ${entries.join('')}
  </ul>${footerStr}`;

  fs.writeFile('data/products.html', html, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('File written successfully');
  });

  console.log('Writing file...');
};
