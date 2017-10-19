var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var server = require("http").createServer(app);
var io = require("socket.io").listen(server);
var socketIO = require('./SocketIO');
server.listen(process.env.PORT || 3000, function(){
	console.log('Server listening on port ' + server.address().port);
});



app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());
  
// var server = app.listen("2244", function() {
//   console.log('Server listening on port ' + server.address().port);
// });

/*var server = app.listen("2244","127.0.0.1");
console.log("—– server is listening —–");*/
module.exports = app;

var connection = require('./Dbconnection');
var routes = require('./Routes');

app.use('/',routes);
socketIO.initSocket(io);

