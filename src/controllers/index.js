// require the other pages
const router = require('express').Router();
// const path = require('path');

const home = require('./home');
const login = require('./login');
const signup = require('./signup');
const checkAuth = require('./checkAuth');
const { upload, insertPic } = require('./uploadpic');
const singlepic = require('./singlepic');
const logOut = require('./logout');
const deletee = require('./delete');
// const comments = require('./comments');

router.use(checkAuth);
router.get('/', home.get);
router.get('/upload', upload);
router.post('/upload', insertPic);
router.get('/singlepic/:id', singlepic.get);
router.get('/deletepic/:id', deletee.delete);
// router.post('/addcomment/:id/:user_id', comments.postcomment);
// router.get('/addcomment/:id/:user_id', comments.getcomments);
router.get('/login', login.get);
router.post('/login', login.post);
router.get('/signup', signup.get);
router.post('/signup', signup.post);
router.get('/logout', logOut.get);

module.exports = router;
