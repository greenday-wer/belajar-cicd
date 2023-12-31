// app.js
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello, World0!\n');
});


server.listen(port, () => {
  console.log(`Server is running on http://localhost:5050`);
});
