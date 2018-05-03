const fs = require('fs');

exports.view = (req, res) => {
  fs.readFile('./src/database/images/file.jpg', (err, file) => {
    if (err) return console.log(err);
    res.send(file);
  });
}
