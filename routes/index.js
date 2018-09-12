var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/home', function(req, res, next) {
  res.send('this is home page');
  // res.render('index', { title: 'Express' });
});

router.get('/demo', function(req, res, next) {
  res.send('this is demo page');
  // res.render('demo', { title: 'Express' });
});

module.exports = router;
