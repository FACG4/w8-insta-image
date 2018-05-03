// const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const getpicdata = require('../database/queries/getpicdata');


exports.get = (req, res) => {
const {id} = req.params;
getpicdata(id, (err, data) => {
  console.log(id);
  if (err){
    res.status(404).render('error')
  }
   console.log(data);
  res.render('singlepic',{ data, loggedIn:req.loggedIn})

});
}



//   const {singlepic } = req.params;
//   const imgName = './images/' + singlepic +'.jpg';
//   console.log(imgName);
//   getpicdata(imgName,(err,data)=>{
//     console.log('entered');
//     console.log(data);
//   })
// }



// queries.getpicdata(imgName, (err, data) => {
//   console.log(imgName);
//   if (err){
//     res.status(404).render('')
//   }
//   console.log(data);
//   // res.render('viewpic', data)
//
// })
