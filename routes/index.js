var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Index' });
});

router.get('/map', function(req, res, next) {
  res.render('map', { title: 'Map' });
});

router.get('/map2', function(req, res, next) {
  res.render('map2', { title: 'Map' });
});

router.get('/mapresult', function(req, res, next) {
  res.render('mapresult', { title: 'Map' });
});

router.get('/london', function(req, res, next) {
  res.render('london', { title: 'London' });
});
router.get('/london2', function(req, res, next) {
  res.render('london2', { title: 'London2' });
});
router.get('/checkout', function(req, res, next) {
  res.render('checkout', { title: 'checkout' });
});

router.get('/hipster', function(req, res, next) {
  res.render('hipster', { title: 'hipster' });
});
router.get('/hipster2', function(req, res, next) {
  res.render('hipster2', { title: 'hipster2' });
});
module.exports = router;
