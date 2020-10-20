const MONGOOSE = require('mongoose');

var Schema = MONGOOSE.Schema;

var UserSchema = new Schema({
	username: { type: String, required: true },
	password: { type: String, required: true },
	type: { type: Object, required: true },
	created: { type: Date, default: Date.now }
});

module.exports = MONGOOSE.model('User', UserSchema);
