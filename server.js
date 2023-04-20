const http = require('http');
const port = process.env.PORT || 8081;


const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Testowanie jest super SUPER! Nuner telefonu 666 222 293');
}

const server = http.createServer(requestListener);
server.listen(port);