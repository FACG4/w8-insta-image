const getimg = require('./../database/queries/getimg');


exports.get = (req, res) => {
  res.render('home', { getimg });
};
