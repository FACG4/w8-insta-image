// const connection  = require('../db_connect');
//
// const addcomment = (id, user_id ,comment, (cb)=>{
//   const sql = {
//     text:'INSERT INTO comments (id,user_id,comment_content) VALUES($1,$2,$3)',
//   values: [id, user_id,comment]
// };
// connection.query(sql, (err, res) => {
//   if (err) {
//   return cb(err)
// }
//
//     console.log(res.rows);
//     return cb (null,res.rows)
//
//   })
//     });
//
//
// const getcomment = (cb) => {
//   const sql = {
//     text: 'SELECT * FROM comments',
//   };
//   connection.query(sql, (err, res) => {
//     if(err){
//       return cb(err);
//     }
//     return cb(null, data.rows)
//   });
// }
//
// module.exports = {addcomment,getcomment}
