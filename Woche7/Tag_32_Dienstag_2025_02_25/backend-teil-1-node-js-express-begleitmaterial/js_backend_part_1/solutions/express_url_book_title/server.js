import express from 'express';
import color from 'chalk';

const HOST = 'localhost'; // 127.0.0.1
const PORT = 8081;
const BASE_URL = `http://${HOST}:${PORT}`;

const app = express();

// ROUTING HTTP-Request
//http://localhost:8000/book/

app.get('/', (req, res) => {
  // res.setHeader('Content-Type', 'text/html'); // <- Express erkennt automatisch passenden "Content-Type"

  const title = 'Do Androids Dream of Electric Sheep?'; //  'Do Androids Dream of Electric Sheep?';  // encodeURIComponent('Do Androids Dream of Electric Sheep?');

  res.send(`<a href="book/${title}">Do Androids Dream of Electric Sheep?</a>`);
});

app.get('/book/:title', (req, res) => {
  console.log(req.params);
  const title = req.params.title;

  res.send(`<h2>Buchtitel lautet: ${title}</h2>`);
});

app.listen(PORT, HOST, () => {
  console.log(color.magenta(`Server running at ${BASE_URL}`));
  console.log(color.yellow('Press Ctrl+C to quit.'));
});
