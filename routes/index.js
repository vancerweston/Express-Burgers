var express = require('express');
var router = express.Router();

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
  res.render('burgers', { 
    title: 'Express Burgers',
    name: 'Burgers',
    burgerOne: 'Burger1Name',
    burgerTwo: 'Burger2Name',
    burgerThree: 'Burger3Name',
    burgerFour: 'Burger4Name',
    burgerFive: 'Burger5Name',
    descOne: 'description...',
    descTwo: 'description...',
    descThree: 'description...',
    descFour: 'description...',
    descFive: 'description...'
  });
});

/* GET Sides page. */
router.get('/sides', function(req, res, next) {
  res.render('sides', { 
    title: 'Express Burgers',
    name: 'Sides',
    sideOne: 'side1Name',
    sideTwo: 'side2Name',
    sideThree: 'side3Name',
    sideFour: 'side4Name',
    sideFive: 'side5Name',
    descOne: 'description...',
    descTwo: 'description...',
    descThree: 'description...',
    descFour: 'description...',
    descFive: 'description...' 
  });
});

/* GET Desserts page. */
router.get('/desserts', function(req, res, next) {
  res.render('desserts', { 
    title: 'Express Burgers',
    name: 'Desserts',
    dessertOne: 'dessert1Name',
    dessertTwo: 'dessert2Name',
    dessertThree: 'dessert3Name',
    dessertFour: 'dessert4Name',
    dessertFive: 'dessert5Name',
    descOne: 'description...',
    descTwo: 'description...',
    descThree: 'description...',
    descFour: 'description...',
    descFive: 'description...'
  });
});

/* GET Directions page. */
router.get('/directions', function(req, res, next) {
  res.render('directions', { title: 'Express Burger' });
});



module.exports = router;
