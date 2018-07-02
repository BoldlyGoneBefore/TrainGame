const http = require('http');
const fs = require('fs');

//this is blocking
var whatsInTest = fs.readFileSync('test.html','utf8');

//console.log(whatsInTest);




const server = http.createServer(function(request,response){
  console.log('request was made ' + request.url)
  response.writeHead(200,{'Content-Type': 'text/html'});
  response.end(whatsInTest);

});

server.listen(3000,'127.0.0.1');
console.log('listining...');
