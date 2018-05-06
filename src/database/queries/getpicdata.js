const dbConnection = require("../db_connect");

const getpicdata = (imgId, cb) => {
  const sql = {
    text: 'select * from posts where id = $1',
    values: [imgId]
  };
  dbConnection.query(sql, (err, data) => {
    if (err) {
      return cb(err);
    }
    return cb(null, data.rows);
  });
};

module.exports = getpicdata;
