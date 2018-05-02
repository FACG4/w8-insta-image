
exports.get = (req, res) => {
  res.render('login', { activePage: { login: true } });
};

exports.post = (req, res) => {
  console.log(req.body);
  res.redirect('/');
};
