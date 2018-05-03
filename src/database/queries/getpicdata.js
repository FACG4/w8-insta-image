const db_connection = require("../db_connect");
// const bcrypt = require('bcrypt');

const getpicdata = (imgId, cb)=>{
const sql = {
  text:'select * from posts where user_id = imgId',
}
  // const sql = 'select pic_url, title ,description ,created_at ,users.first_name , users.last_name from posts inner join posts.user_id = users.id ',
  console.log(imgName);

 db_connection.query(sql,(err,data)=>{
   if(err){
     return cb(err)
   }
   return cb(null, data.rows)
 })
}

module.exports = getpicdata
