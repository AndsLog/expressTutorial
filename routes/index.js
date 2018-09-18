var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '靜態網頁' });
});

/* 範例 */ 
router.get('/example', function(req, res, next) {
  res.render('example', { title: '範例' });
});

/* 在下方輸入程式碼 */ 

module.exports = router;
