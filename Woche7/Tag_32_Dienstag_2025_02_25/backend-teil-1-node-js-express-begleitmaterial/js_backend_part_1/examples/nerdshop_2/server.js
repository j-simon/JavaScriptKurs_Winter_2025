import fs from 'node:fs'; // File system aus der Node.js Standardbibliothek
import color from 'chalk'; // Modul für farbige Konsolenausgaben
import express from 'express'; // Webserver-Framework für Node.js

const app = express();

const HOST = '127.0.0.1'; //or 'localhost'
const PORT = 8081;
const BASE_URL = `http://${HOST}:${PORT}`;
const STOCK_WARN_AMOUNT = 5;

app.use(express.static('public'));

fs.readFile('data/products.csv', 'UTF8', (error, data) => {
  const products = data.split('\n');
  products.shift();

  const entries = products.filter((row) => row !== '').map(recordToHTML);

  app.get('/product/:id', (req, res) => {
    const idx = req.params.id - 1;
    res.send(entries[idx]);
  });
});

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

app.listen(PORT, HOST, () => {
  console.log(color.magenta(`Server running at ${BASE_URL}`));
  console.log(color.yellow('Press Ctrl+C to quit.'));
});
