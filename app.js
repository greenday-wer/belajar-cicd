// app.js
const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World-!\n');
});


server.listen(5050, () => {
  console.log(`Server is running on http://localhost:5050`);
});
