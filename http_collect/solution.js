var http = require('http');
var url = process.argv[2];
var BufferList = require('bl');
var b1 = new BufferList();

http.get(url, function (res) {
  res.on('data', function (data) {
    b1.append(data);
  })

  res.on('end', function () {
    console.log(b1.length);
    console.log(b1.toString());
  })
})
