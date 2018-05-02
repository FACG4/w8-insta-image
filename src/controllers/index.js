// require the other pages

const express = require('express');
const path = require('path');

const router = express.Router();

const login = require('./login');
const signup = require('./signup');

router.get('/login', login.get);
router.get('/signup', signup.get);

module.exports = router;
