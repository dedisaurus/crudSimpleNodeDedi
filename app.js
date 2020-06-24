var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require( 'body-parser');
var mongoose = require('mongoose');

const swaggerUi = require('swagger-ui-express');
const swaggerSumDocument = require ('./swaggerSumDocument.json');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var todoRouter = require('./routes/todo');

var app = express();

app.use(bodyParser.json());
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/todo', todoRouter); 
app.use('/api-docs-sum', swaggerUi.serve, swaggerUi.setup(swaggerSumDocument));

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

mongoose.Promise = global.Promise;

mongoose.connect('localhost/users_test')
  .then(() => console.log('Berhasil terhubung dengan MongoDB'))
  .catch((err) => console.error(err));

module.exports = app;
