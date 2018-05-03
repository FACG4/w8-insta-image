const getimg = require('./../database/queries/getimg');

exports.get = (req, res) => {
  getimg((err, data) => {
    if (err) console.log('db', err);
    else {
      res.render('home', { data, loggedIn: req.loggedIn });
    }
  });
};
