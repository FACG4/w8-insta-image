const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const post = require('./../database/queries/post');

exports.get = (req, res) => {
  res.render('login', { activePage: { login: true } });
};

exports.post = (req, res) => {
  const { username, password } = req.body;
  // console.log(username);
  // console.log(req.body);

  post.getUserData(username, (err, data) => {

    console.log('lksdjf', data);
    if (!data.length) {
      console.log('errorororo', err);
      res.send('invalid username');
    } else {
      console.log('passwordhashed', data[0].password);
      bcrypt.compare(password, data[0].password, (errr, response) => {
        console.log('compare', response);

        if (err) throw new Error(errr, 'compare');

        if (response === false) {
          res.send('invalid username or password');
        } else {
          const secret = process.env.SECRET;
          const token = jwt.sign({ userId: data.id, userName: data.user_name, role: data.role }, secret);
          res.cookie('session', token, { maxAge: 900000, httpOnly: true });
          res.redirect('/');
        }
      });
    }
  });
};
