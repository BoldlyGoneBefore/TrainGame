var fs = require('fs');

//this is blocking
var whatsInTest = fs.readFileSync('test.txt','utf8');

//console.log(whatsInTest);


fs.writeFileSync('writeMe.txt', whatsInTest);
