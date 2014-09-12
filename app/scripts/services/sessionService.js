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