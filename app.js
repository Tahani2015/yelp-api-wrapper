var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var qs = require('qs');

var routes = require('./routes/index');
var search = require('./routes/search');
var business = require('./routes/business');
var app = express();

// TODO: this is bad...
app.locals.yelp = require("yelp").createClient({
    consumer_key: 'UWobTMG9B3mAW5FXp-PNaw',
    consumer_secret: 'gi95WHKwfVe6IUodPU9c1Ks2_Vs',
    token: '4W6L2n8dIF3gC2-VHYnnojDvZg42ulRv',
    token_secret: 'I7uZw5CErSd0my2gS3s5-FohMcs'
});

// Set header
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/search', search);
app.use('/business', business);

//app.get('/search/:yelp_params', function(req, res) {
//    console.log('boo!');
//    console.log(qs.parse(req.params.yelp_params));
//    // See http://www.yelp.com/developers/documentation/v2/search_api
//    yelp.search(qs.parse(req.params.yelp_params), function(error, data) {
//        console.log(data);
//        res.send(data);
//
//    });
//});

//app.get('/business/:yelp_params', function(req, res) {
//    // See http://www.yelp.com/developers/documentation/v2/business
//    yelp.business(req.params.yelp_params, function(error, data) {
//        res.send(data);
//    });
//});

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
