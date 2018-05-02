const getimg = require('./../database/queries/getimg');

exports.get = (req, res) => {
  getimg((err,data)=>{
    if(err) console.log('db', err);
    else {
      console.log('iuuiu',data);
      res.render('home',{data});
    }
   
  });
 
};
