const http = require('http');
const fs = require('fs');

const dreamStream = fs.createReadStream(__dirname + '/readMe.txt','utf8');
const writeDreamStream = fs.createWriteStream(__dirname + '/writeMe.txt','utf8');

dreamStream.on('data',function (chunk){
  console.log('new chunk recieved: ');
  //console.log(chunk);
  writeDreamStream.write(chunk);
});


/*
const server = http.createServer(function(request,response){
  console.log('request was made ' + request.url)
  response.writeHead(200,{'Content-Type': 'text/html'});
  response.end(whatsInTest);

});

server.listen(3000,'127.0.0.1');
console.log('listining...');
*/
