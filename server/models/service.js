const mongoose = require('mongoose')

var Schema = mongoose.Schema

var ServiceSchema = new Schema({
	name: { type: String, required: true }
})

module.exports = mongoose.model('Service', ServiceSchema)
