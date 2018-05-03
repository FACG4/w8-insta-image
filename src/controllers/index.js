// require the other pages
const { upload, insertPic } = require('./uploadpic');
const { view } = require('./viewpc');
const router = require('express').Router();

router.get('/upload', upload);
router.post('/upload', insertPic);
router.get('/pic', view);

module.exports = router;
