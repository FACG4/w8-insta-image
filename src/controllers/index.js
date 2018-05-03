// require the other page
const express = require('express');
const path = require('path');
const singlepic = require('./singlepic');
const error = require('./error');
const home = require('./home');

const router = express.Router();
// import home route controller

const login = require('./login');
const signup = require('./signup');
const checkAuth = require('./checkAuth');
const { upload, insertPic } = require('./uploadpic');



router.use(checkAuth);
router.get('/', home.get);
router.get('/singlepic/:id', singlepic.get)
router.use(error.client);
router.use(error.server);

// export your functions
module.exports = router;
