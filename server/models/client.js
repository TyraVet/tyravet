const mongoose = require('mongoose')

var Schema = mongoose.Schema

var ClientSchema = new Schema({
	name: { type: String, required: true },
	pets: { type: Array, required: true, default: [] },
	address: { type: Object, default: {} },
	phone: { type: Number, required: true }
})

module.exports = mongoose.model('Client', ClientSchema)
