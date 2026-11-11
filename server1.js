const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Selamat datang di Web Server Node.js!');
});

server.listen(8000, () => {
  console.log('Server berjalan di http://localhost:8000');
});
