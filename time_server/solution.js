var net = require('net');
var port = process.argv[2];
var strftime = require('strftime');

console.log(port);

var server = net.createServer(function (socket) {
  var now = new Date();
  socket.end(strftime('%F %R', now) + '\n');
})

server.listen(port);
