const connection = require("./dbConnection");
const bcrypt = require('bcrypt');

const getpicdata = (singlepic, cb)=>{
  const sql = 'select pic_url, title ,description ,created_at ,first_name , last_name from posts',
  console.log(sql);
