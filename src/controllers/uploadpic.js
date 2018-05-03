const insertimage = require('./../database/queries/insertimage');

exports.upload = (req, res) => {
  res.render('uploadpic', { users: 'i am awesome' });
};

exports.insertPic = (req, res) => {
  if (!req.files) {
    return res.send('No file were uploaded');
  }
  const uploadedFile = req.files.fileUrl;
  const imgUrl = './src/database/images/' + Date.now().toString() + '.jpg';
  uploadedFile.mv(imgUrl, (err) => {
    if (err) return res.send('err', err);
    console.log(imgUrl);
    //store data in database
    const data = {};
    data.userId = '1';
    data.picUrl = imgUrl;
    data.title = 'title';
    data.description = 'dsdfasdf';
    data.createdAt = '2018-03-22 19:10:25';
    insertimage(data, (err, result) => {
      if (err) throw new Error('insertimage', err);
      console.log(result);
    })

    res.send('file uploaded');
  });
};
