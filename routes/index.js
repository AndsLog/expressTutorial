var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '動態頁面-query' });
});

/* 範例 */ 
router.get('/example', function(req, res, next) {
  res.render('example', { title: '範例' });
});

module.exports = router;
