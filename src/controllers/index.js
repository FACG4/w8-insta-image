// require the other pages
const router = require('express').Router();
// const path = require('path');

const home = require('./home');
const login = require('./login');
const signup = require('./signup');
const checkAuth = require('./checkAuth');
const { upload, insertPic } = require('./uploadpic');
const { view } = require('./viewpc');

router.use(checkAuth);
router.get('/', home.get);
router.get('/upload', upload);
router.post('/upload', insertPic);
router.get('/pic', view);
router.get('/login', login.get);
router.post('/login', login.post);
router.get('/signup', signup.get);
router.post('/signup', signup.post);

module.exports = router;
