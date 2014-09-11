module.exports = function (app) {
	// initialize auth routes
	// google auth
	app.get('/auth/google', app.passport.authenticate('google', {scope: ['profile', 'email']}));
	// facebook auth
	app.get('/auth/facebook', app.passport.authenticate('facebook', { scope: 'email' }));
	// twitter auth
	app.get('/auth/twitter', app.passport.authenticate('twitter'));
	// logout
	app.get('/logout', function(req, res){
		req.logout();
		res.redirect('/');
	});

	// implement google login strategy
	app.passport.use(new app.googleStrategy({
		returnURL: 'http://localhost:8080/auth/google/callback',
		realm: 'http://localhost:8080'
	},
	function(identifier, profile, done) {
		var user = {};
		user.provider_id = 'g' + identifier.substring(identifier.indexOf('?id=') + 4);
		user.login_provider = 'google';
		user.first_name = profile.name.givenName;
		user.last_name = profile.name.familyName;
		user.email = profile.emails[0].value;
		done(null, user);
	}
	));

	// implement facebook login strategy
	app.passport.use(new app.facebookStrategy({
		clientID: '1469787073306666',
		clientSecret: '7b2c2111f705fc472543c295f3930847',
		callbackURL: 'http://localhost:8080/auth/facebook/callback'
	},
	function(accessToken, refreshToken, profile, done) {
		var user = {};
		user.provider_id = 'f' + profile._json.id;
		user.login_provider = 'facebook';
		user.first_name = profile._json.first_name;
		user.last_name = profile._json.last_name;
		user.email = profile._json.email;
		done(null, user);
	}
	));

	// implement twitter login strategy
	app.passport.use(new app.twitterStrategy({
		consumerKey: 'Qry4UOBThduwZinWHG1qozfHr',
		consumerSecret: 'oRc6HwjgJj1ikGmtUqKvdjTm5k062QcpFoDCAsWBGZ3UMAI6uI',
		callbackURL: "http://localhost:8080/auth/twitter/callback"
	},
	function(token, tokenSecret, profile, done) {
		var user = {};
		user.provider_id = 't' + profile._json.id;
		user.login_provider = 'twitter';
		var name = profile._json.name;
		var separation_index = name.indexOf(' ');
		user.first_name = name.substring(0, separation_index);
		user.last_name = name.substring(separation_index + 1, name.length);
		user.email = '';
		done(null, user);
	}
	));

	// serialize and deserialize user (whatever that means)
	app.passport.serializeUser(function(user, done) {
		done(null, user);
	});
	app.passport.deserializeUser(function(user, done) {
		done(null, user);
	});
};