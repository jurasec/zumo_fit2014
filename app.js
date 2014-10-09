var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var keypress = require("keypress");
var five = require("johnny-five");


var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();
var board = new five.Board();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);



/**********************************************************************************/

keypress(process.stdin);

board.on("ready", function() {

  console.log("Carrito ready... ");

   // listen for the "keypress" event
  process.stdin.on('keypress', function (ch, key) {
    if (key && key.ctrl && key.name == 'c') {
      process.exit(0);
    }

    if ( key ){
      switch ( key.name ){
        case 'up':
          console.log(' => Adelante: ');
          break;
        case 'down':
          console.log(' => Atras: ');
          break;
        case 'left':
          console.log(' => Izquierda: ');
          break;
        case 'right':
          console.log(' => Derecha');
          break;
        case 's':
          console.log(' => Detener...');
          break;
      }
    }

  });
});

process.stdin.setRawMode(true);
process.stdin.resume();

/***********************************************************************************/


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


module.exports = app;
