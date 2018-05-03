// require the other pages
const express = require('express');
const path = require('path');

const router = express.Router();

const login = require('./login');
const signup = require('./signup');

router.get('/login', login.get);
router.post('/login', login.post);
router.get('/signup', signup.get);
router.post('/signup', signup.post);

const home = require('./home');
// import home route controller

router.get('/', home.get);

// export your functions
module.exports = router;
