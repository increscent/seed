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