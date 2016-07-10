var url = require('url');
var http = require('http');
var port = process.argv[2];

console.log(port);

function parseTime(time) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  }
}

function unixtime(time) {
  return { unixtime : time.getTime() }
}

var server = http.createServer(function (req, res) {
  if (req.method != 'GET') {
    return res.end('send me a GET\n');
  }

  var url_parts = url.parse(req.url, true);
  var pathname = url_parts.pathname;
  var time = new Date(url_parts.query.iso);
  var result;

  if (pathname == '/api/parsetime') {
    result = parseTime(time);
  } else if (pathname == '/api/unixtime') {
    result = unixtime(time);
  }

  if (result) {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(result));
  } else {
    res.wirteHead(404);
    res.end();
  }
});

server.listen(port);
