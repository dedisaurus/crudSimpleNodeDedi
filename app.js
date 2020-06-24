var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require( 'body-parser');
var mongoose = require('mongoose');

const swaggerUi = require('swagger-ui-express');
const swaggerSumDocument = require ('./swaggerSumDocument.json');

mongoose.Promise = global.Promise;
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var todoRouter = require('./routes/todo');

var app = express();

app.use(bodyParser.json());
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/todo', todoRouter); 
app.use('/api-docs-sum', swaggerUi.serve, swaggerUi.setup(swaggerSumDocument));


mongoose.connect('mongodb://localhost:27017/crud')  
  .then(() => console.log('Berhasil terhubung dengan MongoDB'))
  .catch((err) => console.error(err));

module.exports = app;
