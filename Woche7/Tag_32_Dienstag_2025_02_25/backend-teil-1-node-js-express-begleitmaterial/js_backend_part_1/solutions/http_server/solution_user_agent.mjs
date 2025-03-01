import http from 'node:http';

const HOST = '127.0.0.1';
const PORT = 8081;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
  console.log(req.headers['user-agent']);
});

server.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}/`);
});

// run with `node solution_user_agent.mjs`
