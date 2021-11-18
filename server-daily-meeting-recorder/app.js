var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// Importing the database class to initialize the connection to the database
const dbConnection = require('./data/dbConnection');
const cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const authenticationRouter = require('./routes/authenticationRoutes');
const projectRouter = require('./routes/projectRoutes');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/authentication', authenticationRouter);
app.use('/project', projectRouter);

// Database initialization
dbConnection.initialize();

module.exports = app;
