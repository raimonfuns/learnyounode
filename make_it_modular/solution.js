var fs = require('fs');
var filter = require('./filter');
var dir = process.argv[2];
var filterStr = process.argv[3];

filter(dir, filterStr, function (err, list) {
  if (err) {
    return console.log(err);
  }

  list.forEach(function (file) {
    console.log(file);
  });
})
