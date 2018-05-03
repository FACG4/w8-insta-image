const jwt = require('jsonwebtoken');
const cookie = require('cookie');
require('env2')('./config.env');

module.exports = (req, res, next) => {
  const cookies = req.cookies ? (req.cookies) : {};
  if (cookies.session) {
    jwt.verify(cookies.session, process.env.SECRET, (err, decoded) => {
      if (err) {
        res.render('error');
        next();
      }
      req.userName = decoded.userName;
      req.userId = decoded.userId;
      req.loggedIn = true;
    });
  }
  next()
};
