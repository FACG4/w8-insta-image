exports.get = (req, res) => {
  res.cookie('session', '', { maxAge: 0 });
  res.redirect('/');
};
