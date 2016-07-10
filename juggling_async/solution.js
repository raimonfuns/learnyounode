var http = require('http');
var BufferList = require('bl');

var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];
var b1 = new BufferList();
var b2 = new BufferList();
var b3 = new BufferList();
var done = [null, null, null];

http.get(url1, function (res) {
  res.on('data', function (data) {
    b1.append(data);
  });
  res.on('end', function () {
    done[0] = true;
    check();
  });
});

http.get(url2, function (res) {
  res.on('data', function (data) {
    b2.append(data);
  });
  res.on('end', function () {
    done[1] = true;
    check();
  });
});

http.get(url3, function (res) {
  res.on('data', function (data) {
    b3.append(data);
  });
  res.on('end', function () {
    done[2] = true;
    check();
  });
});

function check() {
  if (done[0] && done[1] && done[2]) {
    console.log(b1.toString());
    console.log(b2.toString());
    console.log(b3.toString());
  }
}
