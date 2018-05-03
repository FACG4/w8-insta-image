const post = require('./../database/queries/post');
const bcrypt = require('bcrypt');

exports.get = (req, res) => {
  res.render('signup', { activePage: { register: true } });
};

exports.post = (req, res, next) => {
  const {
    username, email, password, first_name: firstName, last_name: lastName,
  } = req.body;

  bcrypt.hash(password, 10, (err, hash) => {
    if (err) {
      console.log(err);
      next(err);
    } else {
      post.addUser(username, email, hash, firstName, lastName, (err, res) => {
        console.log('add user data', res);
      });
    }
  });
};
//     .then((username) => {
//       console.log(req.session);

//       req.session.loggedIn = true;
//       req.session.username = req.body.username;
//       console.log(req.body);

//       res.redirect('/');
//     })
//     .catch((err) => {
//       if (err.message.includes('duplicate key value')) {
//         res.render('signup', {
//           activePage: { register: true },
//           error: 'Username taken',
//         });
//       } else {
//         console.log(`The error is: ${err.message}`);
//         next(err);
//       }
//     });
// }
// };
// addUser(username, email, password, firstName, lastName).then(username => );
