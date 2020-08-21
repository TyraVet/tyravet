const mongoose = require('mongoose')

var Schema = mongoose.Schema

var TypeSchema = new Schema({
	name: { type: String, require: true }
})

module.exports = mongoose.model('Type', TypeSchema)
