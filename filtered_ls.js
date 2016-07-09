var fs = require('fs');

function filteredLs(path, extension) {
  fs.readdir(path, function (err, list) {
    if (err) return false;

    for (var i = 0, len = list.length; i < len; i++) {
      if (list[i].indexOf('.' + extension) != -1) {
        console.log(list[i]);
      }
    }
  })
}

filteredLs(process.argv[2], process.argv[3]);
