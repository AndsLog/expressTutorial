var express = require('express');
var router = express.Router();

/* 範例. */
var exampleCtl = require('../controllers/example');
router.get('/class2', exampleCtl.apiExample);
router.get('/abcd', exampleCtl.apiExample);

module.exports = router;
