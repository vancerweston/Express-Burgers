var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express Burgers' });
});

/* GET burgers page. */
router.get('/burgers', function(req, res, next) {
  res.render('burgers', { title: 'Burgers' });
});


module.exports = router;
