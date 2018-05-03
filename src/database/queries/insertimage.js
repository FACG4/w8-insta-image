const connection = require('../db_connect');

const uploadImage = (data, cb) => {
  const { userId, picUrl, title, description, createdAt } = data;
  const sql = {
    text: "INSERT INTO posts (user_id, pic_url, title, description) VALUES(2,'sdf', 'sdf','sdfd')"
  };
  connection.query(sql, (err, res) => {
    if (err) cb(err);
    else cb(null, res.rows);
  });
};

module.exports = uploadImage;

