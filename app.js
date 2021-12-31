var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require("mongoose");
var cors=require('cors');
var fileupload=require('express-fileupload');
// var session=require("express-session");
// var sessionAuth=require("./middlewares/sessionAuth");



var app = express();
//app.use(session({secret:"keyboard cat", cookie:{maxAge:6000}}));

// app.use(session({
//   secret: "dummytext",
//   resave: false,
//   saveUninitialized: true,
//   cookie: { secure: true}
// }));

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productsRouter = require('./routes/products');




// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
//app.use(sessionAuth);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use(fileupload());
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);

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

// mongoose.connect("mongodb://localhost/productscrud", { useNewUrlParser: true, useUnifiedTopology:true })
//   .then(() => console.log("connectes to mongodb"))
//   .catch((error) => console.log(error.message));

mongoose.connect("mongodb://localhost/mystoredb").then(()=>{
  console.log("mongo connected success");
}).catch((err)=>{
  console.log(err);
});

module.exports = app;
