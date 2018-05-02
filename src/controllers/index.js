// require the other pages
const express = require('express');


const router = express.Router();
const home = require('./home');
// import home route controller

router.get('/', home.get);

// export your functions
module.exports = router;
