module.exports = function (app) {
	app.express = require('express');
	app.mongoose = require('mongoose');
	app.mongooseSession = require('mongoose-session');
	app.bodyParser = require('body-parser');
	app.cookieParser = require('cookie-parser');
	app.expressSession = require('express-session');
	app.passport = require('passport');
	app.googleStrategy = require('passport-google').Strategy;
	app.facebookStrategy = require('passport-facebook').Strategy;
	app.twitterStrategy = require('passport-twitter').Strategy;
	app.uuid = require('node-uuid');
};