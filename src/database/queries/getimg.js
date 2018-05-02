const connection = require('../db_connect');

const getImg = (image, cb) => {
  const sql = {
    text: 'SELECT * FROM ',
    // values: 
  };
  connection.query(sql, (err, res) => {
    if (err) {
      return cb(err);
    }
    cb(null, res.rows);
  });
};

module.exports = getImg;
