// var Profile = require("./profile.js");
// var unsecurePassword = "password";
// var username = process.argv.slice(2);
// // var bcrypt = require('bcrypt');
// // bcrypt.genSalt(10, function(err, salt) {
// //     bcrypt.hash('unsecurePassword', salt, function(err, hash) {
// //         // Store hash in your password DB.
// //         console.log(hash.underline.red);
// //     });
// // });
// console.dir(process);
// profile.get(username);
// var studentProfile = new Profile("michaelhall6");
var router = require('./router.js');
var http = require('http');

http.createServer(function (request, response) {
  router.home(request, response);
  router.user(request, response);
}).listen(3000, '127.0.0.1');

console.log('Server running at http://127.0.0.1:3000/');








