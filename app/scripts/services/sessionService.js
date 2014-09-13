seedApp
.service('sessionService', function (httpService) {
	this.getSession = function (callback) {
		httpService.post('/session/get', {}, '', function (result) {
			return callback(!result.error && result);
		});
	};
});