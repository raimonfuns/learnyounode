var fs = require('fs');

function filteredLs(dir, filterStr, callback) {
  fs.readdir(dir, function (err, list) {
    if (err) return callback(err);

    list = list.filter(function (file) {
      return file.indexOf('.' + filterStr) != -1;
    });

    callback(err, list);
  })
}

module.exports = filteredLs;
