// init express
var express = require('express');
var app = express();

// import requires
require('./require')(app);

// configure server
require('./config')(app);

// load in models
require('./models')(app);

// load in classes
app.User = require('./classes/user');

// load in modules
require('./modules/auth')(app);
require('./modules/session')(app);
// this one last
require('./modules/angular-routes')(app);

// start server
var http = require('http').createServer(app);
// var credentials = require('./ssl/ssl.js').credentials;
// var https = require('https').createServer(credentials, app);

http.listen(app.get('port'));
// https.listen(443);