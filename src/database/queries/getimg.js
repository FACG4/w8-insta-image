const connection = require('../db_connect');

const getImg = (cb) => {
  const sql = {
    text: 'SELECT  pic_url FROM posts ',
  };
  connection.query(sql, (err, res) => {
    console.log('res.rows', res.rows[0].pic_url);

    if (err) cb(err);
    else cb(null, res.rows);
  });
};

module.exports = getImg;
