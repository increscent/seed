module.exports = function(mongoose) {
	var Schema = mongoose.Schema;
	var usersSchema = new Schema({
		id: String,
		provider_id: String,
		login_provider: String,
		first_name: String,
		last_name: String,
		email: String
	});
	
	return mongoose.model('users', usersSchema);
};