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