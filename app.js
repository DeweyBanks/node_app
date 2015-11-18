
var router = require('./router.js');
var http = require('http');

http.createServer(function (request, response) {
  router.home(request, response);
  router.user(request, response);
}).listen(process.env.PORT || 5000);




console.log('Server running at Port: ' + (process.env.PORT !== undefined ? process.env.PORT : 5000));






