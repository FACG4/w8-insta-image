const getimg = require('./../database/queries/getimg');

exports.get = (req, res) => {
  getimg((err, data) => {
    if (err) {
      res.render('error', { err });
    } else {
      res.render('home', { data, loggedIn: req.loggedIn, userName: req.userName });
    }
  });
};
