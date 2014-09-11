module.exports = function (app) {
	// protect angular routes
	app.use(function(req, res) {
		res.sendFile(require('path').join(__dirname, '../../app/index.html'));
	});
};