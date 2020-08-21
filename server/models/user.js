const mongoose = require('mongoose')

var Schema = mongoose.Schema

var UserSchema = new Schema({
	username: { type: String, required: true },
	password: { type: String, required: true },
	type: { type: Object, required: true },
	created: { type: Date, default: Date.now }
})

module.exports = mongoose.model('User', UserSchema)
