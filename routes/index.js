var express = require('express');
var router = express.Router();
var menu = require('./menu');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Express Burgers',
    aboutTitle: 'All About Us:',
    aboutBody: 'We have always loved the small American resturants that define our culinary culture. Nothing is better than a fresh grilled burger or a smooth shake on a sunday. We know you love these things, and we love them too. So, we set out to bring those things to you. From our kitchen to yours, fresh food at a great price.' 
  });
});

/* GET burgers page. */
router.get('/burgers', function(req, res, next) {
  res.render('burgers', menu.burgers);
});

/* GET Sides page. */
router.get('/sides', function(req, res, next) {
  res.render('sides', menu.sides); 
});

/* GET Desserts page. */
router.get('/desserts', function(req, res, next) {
  res.render('desserts', menu.desserts); 
});

/* GET Directions page. */
router.get('/directions', function(req, res, next) {
  res.render('directions', { title: 'Express Burgers' });
});



module.exports = router;
