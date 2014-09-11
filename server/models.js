module.exports = function (app) {
	app.models = {};
	app.models.users = require('./models/users')(app.mongoose);
};