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