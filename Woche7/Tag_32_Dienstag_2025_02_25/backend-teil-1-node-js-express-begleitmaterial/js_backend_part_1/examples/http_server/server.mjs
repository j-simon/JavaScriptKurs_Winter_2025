// server.mjs
import http from 'node:http';

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!\n');
});

// starts a simple http server locally on port 8081
server.listen(8081, '127.0.0.1', () => {
  console.log('Server running at http://127.0.0.1:8081');
});

// run with `node server.mjs`
