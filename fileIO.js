var fs = require('fs');
fs.readFile('./test.txt', 'utf-8', function (err, output) {
    console.log(output);
});
