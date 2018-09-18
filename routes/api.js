var express = require('express');
var router = express.Router();

/* 範例. */
var exampleCtl = require('../controllers/example');
router.get('/example', exampleCtl.apiExample);

module.exports = router;
