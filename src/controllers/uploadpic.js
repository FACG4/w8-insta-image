const insertimage = require('./../database/queries/insertimage');

exports.upload = (req, res) => {
  if (req.loggedIn) {
    res.render('uploadpic', { loggedIn: req.loggedIn, userName: req.userName });
  } else {
    res.redirect('/login');
  }
};

exports.insertPic = (req, res) => {
  if (!req.files) {
    return res.send('No file were uploaded');
  }
  const uploadedFile = req.files.fileUrl;
  const imgUrl = './public/images/' + Date.now().toString() + '.jpg';
  uploadedFile.mv(imgUrl, (err) => {
    if (err) return res.send('err', err);

    const data = {};
    data.userId = '1';
    data.picUrl = imgUrl;
    data.title = req.body.title;
    data.description = req.body.description;

    insertimage(data, (err, result) => {
      if (err) throw new Error('insertimage', err);
      res.redirect('/');
    });
  });
};
