import fs from 'node:fs'; // File system aus der Node.js Standardbibliothek
import color from 'chalk'; // Modul für farbige Konsolenausgaben
import express from 'express'; // Webserver-Framework für Node.js

const app = express();

const HOST = '127.0.0.1'; //or 'localhost'
const PORT = 8081;
const BASE_URL = `http://${HOST}:${PORT}`;
const STOCK_WARN_AMOUNT = 5;

// Express Setting - EJS Template Engine
app.set('view engine', 'ejs');

// Middleware
app.use(express.static('public'));

fs.readFile('data/products.csv', 'UTF8', (error, data) => {
  const products = data.split('\n');
  products.shift();

  const entries = products.filter((row) => row !== '').map(recordToObject);

  app.get('/', (req, res) => {
    res.render('index', { products: entries });
  });

  app.get('/product/:id', (req, res) => {
    const idx = req.params.id - 1;
    res.render('product', { product: entries[idx] });
  });
});

// Function to convert a CSV record to Object (JSON)
const recordToObject = (record) => {
  const fields = record.split(/\s*,\s*/); // Split by comma and remove whitespaces
  return {
    code: fields[0],
    shortDescription: fields[1],
    tagline: fields[2],
    quantity: Number(fields[3]),
    price: Number(fields[4]),
    stockWarn: fields[3] <= STOCK_WARN_AMOUNT ? true : false,
  };
};

app.listen(PORT, HOST, () => {
  console.log(color.magenta(`Server running at ${BASE_URL}`));
  console.log(color.yellow('Press Ctrl+C to quit.'));
});
