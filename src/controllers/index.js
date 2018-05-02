// require the other pages
const express = require('express');

const express = require('express');
const path = require('path');
const router = express.Router();

const login = require('./login');
const register = require('./register');
const  uploadpic = require('./uploadpic');
const viewpic = require('./viewpic')
const error = require('./error');


const router = express.Router();
const home = require('./home');
// import home route controller

router.get('/', home.get);

// export your functions
module.exports = router;
