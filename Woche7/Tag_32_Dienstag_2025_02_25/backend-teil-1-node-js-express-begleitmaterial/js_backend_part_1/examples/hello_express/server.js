import color from 'chalk'; // Modul für farbige Konsolenausgaben
import express from 'express'; // Webserver-Framework für Node.js

const app = express();

const HOST = '127.0.0.1'; //or 'localhost'
const PORT = 8081;
const BASE_URL = `http://${HOST}:${PORT}`;

// Route for the root URL
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, HOST, () => {
  console.log(color.magenta(`Server running at ${BASE_URL}`));
  console.log(color.yellow('Press Ctrl+C to quit.'));
});
