const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const post = require('./../database/queries/post');

exports.get = (req, res) => {
  res.render('login', { activePage: { login: true }, msg: req.msg });
};

exports.post = (req, res) => {
  const { username, password } = req.body;

  post.getUserData(username, (err, data) => {
    if (!data.length) {
      res.send('invalid username');
    } else {
      bcrypt.compare(password, data[0].password, (errr, response) => {
        if (err) throw new Error(errr, 'compare');
        if (response === false) {
          res.send('invalid password');
        } else {
          const secret = process.env.SECRET;
          const token = jwt.sign({ userId: data[0].id, userName: data[0].user_name, role: data[0].role }, secret);
          res.cookie('session', token, { maxAge: 900000, httpOnly: true });
          res.redirect('/');
        }
      });
    }
  });
};
