// app.js
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello, Worldm0!\n');
});


server.listen(5050, () => {
  console.log(`Server is running on http://localhost:5050`);
});
