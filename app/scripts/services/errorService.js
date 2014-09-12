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