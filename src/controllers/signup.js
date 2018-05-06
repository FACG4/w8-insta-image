const post = require('./../database/queries/post');
const bcrypt = require('bcrypt');

exports.get = (req, res) => {
  if (req.loggedIn) {
    res.redirect('/');
  } else {
    res.render('signup', { activePage: { register: true } });
  }
};

exports.post = (req, res) => {
  const {
    username, email, password, first_name: firstName, last_name: lastName,
  } = req.body;

  bcrypt.hash(password, 10, (err, hash) => {
    if (err) {
      throw new Error(err, 'hashing password signup');
    } else {
      post.addUser(username, email, hash, firstName, lastName, (err, result) => {
        res.redirect('/login');
      });
    }
  });
};
