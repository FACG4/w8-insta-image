const getpicdata = require('../database/queries/getpicdata');


exports.get = (req, res) => {
  const { id } = req.params;
  getpicdata(id, (err, data) => {
    if (err) {
      res.status(404).render('error', { err });
    }
    res.render('singlepic', { data, loggedIn: req.loggedIn, userName: req.userName });
  });
};
