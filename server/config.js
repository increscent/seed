module.exports = function (app) {
	app.use(app.cookieParser());
	app.mongoose.connect('mongodb://user:password@ds035250.mongolab.com:35250/mongo');
	app.use(app.expressSession({
		'secret': ',sn.thpzovwesunc',
		'saveUninitialized': true,
		'resave': true,
		'cookie': {
		// 'secure': true, //https only
		'path': '/'
	},
	'store': app.mongooseSession(app.mongoose)
	}));
	app.use(app.bodyParser.urlencoded());
	app.use(app.bodyParser.json());
	app.use(app.passport.initialize());
	app.use(app.passport.session());
	app.set('port', 8080);
	app.use(app.express.static(require('path').join(__dirname, '../app')));
};
