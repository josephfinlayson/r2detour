var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var braintree = require('braintree');
var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/images/favicon.png'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


var util = require('util'),
    braintree = require('braintree');

var gateway = braintree.connect({
  environment: braintree.Environment.Sandbox,
  merchantId: '8f6977762nz4dh6g',
  publicKey: '4b56hhx9ywx3yz4y',
  privateKey: '18b1fe806fe411af81e05857b151ea48'
});
/*
gateway.transaction.sale({
  amount: '5.00',
  creditCard: {
    number: '5105105105105100',
    expirationDate: '05/12'
  }
}, function (err, result) {
  if (err) throw err;

  if (result.success) {
    util.log('Transaction ID: ' + result.transaction.id);
  } else {
    util.log(result.message);
  }
});
*/
app.get('/token', function (req, res) {
    console.log(req);
  gateway.clientToken.generate(null, function (error, response) {
    if (!error) {
      res.send(response.clientToken);
    } else {
      res.send(response);
    }
  });
});

app.post("/payment-methods", function (req, res) {
  var nonce = req.body.payment_method_nonce;
  // Use payment method nonce here
});

app.post("/checkout", function (req, res) {
    
    gateway.transaction.sale({
      amount: '10.00',
      paymentMethodNonce: 'nonce-from-the-client',
    }, function (err, result) {
    });
});
/**/
module.exports = app;
