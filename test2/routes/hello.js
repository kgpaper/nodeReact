var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('helloworld', { title: 'hello world', line: "DSC" });
});

module.exports = router;
