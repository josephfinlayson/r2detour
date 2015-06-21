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
module.exports = router;
