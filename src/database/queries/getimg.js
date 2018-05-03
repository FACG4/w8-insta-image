const connection = require('../db_connect');

const getImg = (cb) => {
  const sql = {
    text: 'SELECT  pic_url ,title ,id FROM posts ',
  };
  connection.query(sql, (err, res) => {
    console.log('res', res.rows);

    if (err) cb(err);
    else cb(null, res.rows);
  });
};

module.exports = getImg;
