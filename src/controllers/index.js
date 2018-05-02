// require the other pages
const express = require('express');

const express = require('express');
const path = require('path');

const router = express.Router();

const login = require('./login');
const signup = require('./signup');

router.get('/login', login.get);
router.get('/signup', signup.get);

const home = require('./home');
// import home route controller

router.get('/', home.get);

// export your functions
module.exports = router;
