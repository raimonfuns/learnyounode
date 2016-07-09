var fs = require('fs');

fs.readFile(process.argv[2], 'utf8', function (err, data) {
  if (err) return false;
  
  console.log(data.split('\n').length - 1);
});
