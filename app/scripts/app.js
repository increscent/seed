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