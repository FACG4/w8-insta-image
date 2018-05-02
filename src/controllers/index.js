// require the other pages

const express = require('express');
const path = require('path');
const router = express.Router();

const login = require('./login');
const register = require('./register');
const  uploadpic = require('./uploadpic');
const viewpic = require('./viewpic')
const error = require('./error');



// export your functions
module.exports = router;
