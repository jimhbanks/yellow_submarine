var http = require('http');

http.createServer(function (req, res) {

  console.log(req.method, req.url);

  if (req.url === '/') {

  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');

  } else if(req.url === '/about') {  
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('About Jim\n');
  }else if(req.url === /names/ + :names){
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('class names\n');
  }else {
    res.writeHead(404, {'Content-Type': 'text/plain'});
  res.end('Error, Page Not Found 404\n');
  }



  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');

}).listen(1337, 'localhost');

console.log('Server running at http://localhost:1337/');