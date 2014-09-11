// User class
function User(mongoose_models) {
	this.mongoose_models = mongoose_models;
}

User.prototype.findUser = function(provider_id, callback) {
	this.mongoose_models.users.findOne({provider_id: provider_id}, function (err, user) {
		return (user)? callback(user) : callback(null);
	});
};

User.prototype.getUser = function(id, callback) {
	this.mongoose_models.users.findOne({id: id}, function (err, user) {
		return (user)? callback(user) : callback(null);
	});
};

User.prototype.saveUser = function(id, data, callback) {
	// check if user exists
	var class_scope = this;
	this.getUser(id, function (user) {
		if (user) {
			for (var key in data) {
				user[key] = data[key];
			}
		} else {
			user = new class_scope.mongoose_models.users({
				id: data.id,
				provider_id: data.provider_id,
				login_provider: data.login_provider,
				first_name: data.first_name,
				last_name: data.last_name,
				email: data.email
			});
		}

		user.save(function (err, newUser) {
			if (err) {
				return callback({error: true});
			} else {
				return callback(newUser);
			}
		});
	});
};

module.exports = User;