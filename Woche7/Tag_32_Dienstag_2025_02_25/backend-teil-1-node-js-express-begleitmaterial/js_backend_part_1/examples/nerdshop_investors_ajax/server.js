import express from 'express';
import color from 'chalk';

const HOST = '127.0.0.1'; // localhost;
const PORT = 8081;
const BASE_URL = `http://${HOST}:${PORT}`;

const app = express();

// MIDDLEWARES =============
app.use(express.static('./public'));

// ROUTING =================
app.get('/', (req, res) => {
  res.send('SERVER WORKS...');
});

app.get('/info', (req, res) => {
  const stockInfo = {
    price: (174 + 20 * Math.random()).toFixed(2),
    volume: (1500000 * 50000 * Math.random()).toFixed(2),
    time: new Date().toLocaleTimeString(),
  };

  res.send(stockInfo);
});

app.listen(PORT, HOST, () => {
  console.log(color.magenta(`SERVER IS RUNNING AT: ${BASE_URL}`));
  console.log(color.yellow('TO SHUTDOWN SERVER: CTRL + C'));
});
