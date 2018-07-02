const http = require('http');
const fs = require('fs');



/*dreamStream.on('data',function (chunk){
  console.log('new chunk recieved: ');
  //console.log(chunk);
  writeDreamStream.write(chunk);
});*/


const server = http.createServer(function(request,response){
  console.log('request was made ' + request.url)
  if ( request.url === '/') {
    response.writeHead(200,{'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/test.html').pipe(response);
  } else if ( request.url === '/contact') {
    response.writeHead(200,{'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/contact.html').pipe(response);
  } else {
    response.writeHead(404,{'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/404.html').pipe(response);   
  }
});

server.listen(3000,'127.0.0.1');
console.log('listining...');
