const insertimage = require('./../database/queries/insertimage');

exports.upload = (req, res) => {
  res.render('uploadpic');
};

exports.insertPic = (req, res) => {
  if (!req.files) {
    return res.send('No file were uploaded');
  }
  const uploadedFile = req.files.fileUrl;
  const imgUrl = './public/images/' + Date.now().toString() + '.jpg';
  uploadedFile.mv(imgUrl, (err) => {
    if (err) return res.send('err', err);

    //store data in database
    const data = {};
    data.userId = '1';
    data.picUrl = imgUrl;
    data.title = req.body.title;
    data.description = req.body.description;

    insertimage(data, (err, result) => {
      if (err) throw new Error('insertimage', err);
      // res.send('file uploaded');
      res.redirect('/');
    });

  });
};
