require('dotenv').config()
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// Importing the database class to initialize the connection to the database
const dbConnection = require('./data/dbConnection');
const cors = require('cors');
const passport = require('passport');
require('./auth/config');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const authenticationRouter = require('./routes/authenticationRoutes');
const meetingRouter = require('./routes/meetingRoutes');
const projectRouter = require('./routes/projectRoutes');
const projectDetailRouter = require('./routes/projectDetailRoutes');
const memberRouter = require('./routes/memberRoutes');
const recordingRouter = require('./routes/recordingRoutes')
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use(passport.initialize());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/authentication', authenticationRouter);
app.use('/meeting', meetingRouter);
app.use('/project', projectRouter);
app.use('/projectDetail', projectDetailRouter);
app.use('/member', memberRouter);
app.use('/recording', recordingRouter)

// Database initialization
dbConnection.initialize();

module.exports = app;
