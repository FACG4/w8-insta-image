const connection = require('../db_connect');

const deletepic = (id,cb) => {
  console.log('sssssssss');
  const sql = {
    text: 'DELETE FROM posts WHERE id = $1 RETURNING * ',
    values: [id]
};
connection.query(sql, (err, res) => {
  if (err) cb(err);
  cb(null, res.rows);
  console.log(res.rows);
});
}
module.exports = deletepic
