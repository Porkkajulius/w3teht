var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var elokuvat = require('./routes/elokuvat');

// lataa mongoose
var mongoose = require('mongoose');

// Noden promiset
mongoose.Promise = global.Promise;

// Mene MongoDB
mongoose.connect('mongodb://localhost/elokuva-api')
    .then(() =>  console.log('connection succesful'))
.catch((err) => console.error(err));

var app = express();

// view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//favicon
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/elokuvat', elokuvat);

// 404 ja ohjaa virhekäsittelyyn
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// virhekäsittely


// printtaa stacktrace tuloksen
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}



module.exports = app;

