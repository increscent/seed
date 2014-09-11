// load in modules
var fs = require('fs');

// load in ssl files
var privateKey  = fs.readFileSync('./ssl/server.key', 'utf8');
var certificate = fs.readFileSync('./ssl/[crt file]', 'utf8');
var ca_bundle = [
	fs.readFileSync('./ssl/[ca crt file]', 'utf8'),
	fs.readFileSync('./ssl/[other crt file]', 'utf8'),
	fs.readFileSync('./ssl/[external crt file]', 'utf8')
];
var credentials = {
	ca: ca_bundle,
	key: privateKey,
	cert: certificate
};

// define exports
exports.credentials = credentials;