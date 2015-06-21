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
router.get('/checkout2', function(req, res, next) {
  res.render('checkout', { title: 'checkout' });
});

router.get('/hipster', function(req, res, next) {
  res.render('hipster', { title: 'hipster' });
});
router.get('/hipster2', function(req, res, next) {
  res.render('hipster2', { title: 'hipster2' });
});
router.get('/weather', function(req, res, next) {
  res.render('weather', { title: 'weather'});
});
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'login'});
});
router.get('/dolladollabillsyall', function(req, res, next) {
  res.render('dolladolla', { title: 'dolladollabillsyall'});
});
router.get('/error', function(req, res, next) {
  res.render('error', { title: 'error' });
});
router.get('/weather2', function(req, res, next) {
  res.render('weather2', { title: 'weather2' });
});
var braintree = require('braintree');

var gateway = braintree.connect({
    environment:  braintree.Environment.Sandbox,
    merchantId:   '8f6977762nz4dh6g',
    publicKey:    '4b56hhx9ywx3yz4y',
    privateKey:   '18b1fe806fe411af81e05857b151ea48'
});

//    braintree = require('braintree');
//
//var gateway = braintree.connect({
//  environment: braintree.Environment.Sandbox,
//  merchantId: '8f6977762nz4dh6g',
//  publicKey: '4b56hhx9ywx3yz4y',
//  privateKey: '18b1fe806fe411af81e05857b151ea48'
//});
/*
/* GET Creates a new token and returns it in the response */
router.get('/token', function (req, res) {
  gateway.clientToken.generate(null, function (error, response) {
    if (!error) {
      res.send(response.clientToken);
    } else {
      res.send(response);
    }
  });
});

router.post("/checkout", function (req, res) {
    console.log(req.body.payment_method_nonce);
    gateway.transaction.sale({
      amount: '10.00',
      paymentMethodNonce: req.body.payment_method_nonce,
    }, function (err, result) {
        console.log(result);
        res.send(result);
        
    });
});

router.post("/payment-methods", function (req, res) {
    console.log(req);
  var nonce = req.body.payment_method_nonce;
  // Use payment method nonce here
});


module.exports = router;
