const jwt = require('jsonwebtoken');
require('env2')('./config.env');

module.exports = (req, res, next) => {
  const cookies = req.cookies ? (req.cookies) : {};
  if (cookies.session) {
    jwt.verify(cookies.session, process.env.SECRET, (err, decoded) => {
      if (err) {
        console.log('erdsfsdfr', err);

        res.render('home');
        next();
      } else {
        req.userName = decoded.userName;
        req.userId = decoded.userId;
        req.loggedIn = true;
      }
    });
  }
  next();
};
