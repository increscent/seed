var seedApp = angular.module('seedApp', ['ngRoute']);

seedApp
.config( function ($locationProvider, $routeProvider) {
	$routeProvider
	.otherwise({
		redirectTo: '/login'
	});

	$locationProvider.html5Mode(true);
});
seedApp
.config( function ($routeProvider) {
	$routeProvider
	.when('/login', {
		templateUrl: 'pages/login/login.tpl.html',
		controller: 'loginController'
	});
})

.controller('loginController', function ($scope, $location) {
});