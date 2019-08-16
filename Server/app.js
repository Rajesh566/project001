var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

// importing our studnet.route.js file

var UserRoute = require('./routes/user.route')
var OwnerRoute = require('./routes/owner.route');
var bodyParser = require('body-parser')
// creating express app
var app = express();
// mongodb url
var url = 'mongodb://127.0.0.1:27017/Miracle';

mongoose.connect(url);

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', function(){
  console.log("Error connecting to Database");	
  });
 
  // to get notification if connected to db
db.on('open',function(){	
  console.log("Database Connected");	
  });
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
// assgning our route
app.use('/owner',OwnerRoute);
app.use('/user',UserRoute)
// app.use('/owner',student);
// app.use('/users',userschema);
// app.use('/register',Registerschema);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// exporting our app
module.exports = app;
