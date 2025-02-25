import express from 'express';
import color from 'chalk';

const PORT = 8081;
const HOST = '127.0.0.1'; // or 'localhost'
const BASE_URL = `http://${HOST}:${PORT}`;

const app = express();

// Middleware
app.use(express.static('./public'));

// Routes
app.get('/', (req, res) => {
  res.send('Server works..');
});

// Server start
app.listen(PORT, HOST, () => {
  console.log(color.green(`🚀 SERVER IS RUNNING AT: ${BASE_URL}`));
  console.log(color.yellow('CTRL + C to shutdown'));
});
