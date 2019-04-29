var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('哈哈哈哈');
  res.send('你好吗');
});

module.exports = router;
