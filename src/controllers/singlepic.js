const jwt = require('jsonwebtoken');
require('env2')('config.env')
const queries = ('../database/queries');

exports.get = (req, res) => {
  const {singlepic } = req.params;
  if (home.includes(singlepic)) {
    queries.getpicdata(singlepic, (err, result, data) => {
      //     if (err){
      //     res.status(404).send();
      //   }
      //   else {
    //     if (result) {
      //
      //   }
      // }
    });
  }
};
