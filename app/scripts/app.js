var seedApp = angular.module('seedApp', ['ngRoute']);

seedApp
.config( function ($locationProvider, $routeProvider) {
	$routeProvider
	.otherwise({
		redirectTo: '/login'
	});

	$locationProvider.html5Mode(true);
});