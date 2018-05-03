const bcrypt = require('bcrypt');
const post = require('./../database/queries/post');


exports.get = (req, res) => {
  res.render('login', { activePage: { login: true } });
};

exports.post = (req, res) => {
  const { username, password } = req.body;
  post.getUserData(username, (err, data) => {
    console.log('lksdjf', data);

    if (err) {
      console.log('errorororo');
    } else if (user) {
      console.log('user');
    }

    // bcrypt.compare(password, data);
  });

  res.redirect('/');
};
