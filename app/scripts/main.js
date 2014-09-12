var seedApp = angular.module('seedApp', ['ngRoute']);

seedApp
.config( function ($locationProvider, $routeProvider) {
	$routeProvider
	.when('/logout', {
		templateUrl: 'pages/logout/logout.tpl.html',
		controller: 'logoutController'
	});
	// .when('/', {
	// 	redirectTo: '/login'
	// });

	$locationProvider.html5Mode(true);
});
seedApp
.service('errorService', function () {
	this.error_callback;
	this.register = function (error_callback) {
		this.error_callback = error_callback;
	};

	this.errorMessage = function (message, status) {
		if (this.error_callback) this.error_callback(message, status);
	};
});
seedApp
.service('httpService', function ($http, errorService) {
	this.post = function (request_url, data, error_message, callback) {
		$http.post(request_url, data)
		.success( function(data, status, headers, config) {
			if (data.error) {
				errorService.errorMessage(error_message, 'error');
			}
			return callback(data);
		})
		.error( function(data, status, headers, config) {
			errorService.errorMessage(error_message, 'error');
			return callback({error: true});
		});
	};
});
seedApp
.service('sessionService', function (httpService) {
	this.getSession = function (callback) {
		httpService.post('/session/get', {}, '', function (result) {
			return callback(!result.error && result);
		});
	};

	this.endSession = function (callback) {
		httpService.post('/session/end', {}, '', function (result) {
			return callback();
		});
	};
});
seedApp
.config( function ($routeProvider) {
	$routeProvider
	.when('/login', {
		templateUrl: 'pages/login/login.tpl.html',
		controller: 'loginController'
	});
})
.controller('loginController', function ($scope, $location, sessionService) {
	sessionService.getSession( function (result) {
		console.log(result);
	});
});
seedApp
.config( function ($routeProvider) {
	$routeProvider
	.when('/logout', {
		templateUrl: 'pages/logout/logout.tpl.html',
		controller: 'logoutController'
	});
})
.controller('logoutController', function ($scope, $location, sessionService) {
	sessionService.endSession( function () {
		// $location.path('/login');
	});
});