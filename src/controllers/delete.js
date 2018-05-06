const deletepic = require('./../database/queries/deletepic');

exports.delete = (req, res) => {
  const {
    id,
  } = req.params;
  deletepic(id, (err, result) => {
    if (err) {
      res.send('error');
    } else {
      return res.status(200).render('home', {
        result,
      });
    }
  });
};
