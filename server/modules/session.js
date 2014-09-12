module.exports = function (app) {
	// initialize routes
	// google auth callback
	app.get('/auth/google/callback', app.passport.authenticate('google', {failureRedirect: '/login/error'}), function (req, res) {
		process_user(req, res);
	});
	// facebook auth callback
	app.get('/auth/facebook/callback', app.passport.authenticate('facebook', {failureRedirect: '/login/error'}), function (req, res) {
		process_user(req, res);
	});
	// twitter auth callback
	app.get('/auth/twitter/callback', app.passport.authenticate('twitter', {failureRedirect: '/login/error'}), function (req, res) {
		process_user(req, res);
	});
	// end session/logout
	app.post('/session/end', function (req, res) {
		// end passport session
		req.logout();
		// end mongo session
		req.session.destroy( function(err) {
			res.send();
		});
	});
	// get session
	app.post('/session/get', function (req, res) {
		console.log(req.session.user_id);
		res.send((req.session.user_id)? true : false);
	});

	var process_user = function (req, res) {
		var newUser = new app.User(app.models);
		newUser.findUser(req.user.email, req.user.provider_id, function (user) {
			if (user) {
				// user already exists
				req.session.user_id = user.id;
				res.redirect('/');
			} else {
				// create a new user
				req.user.id = app.uuid.v1();
				newUser.saveUser(req.user.id, req.user, function (result) {
					if (result.error) {
						res.redirect('/login/error');
					} else {
						req.session.user_id = result.id;
						res.redirect('/signup');
					}
				});
			}
		});
	}
};

