const mongoose = require('mongoose')

var Schema = mongoose.Schema

var AddressSchema = new Schema({
	street: { type: String, required: true },
	number: { type: Number, required: true },
	intNumber: { type: Number, required: false },
	postalCode: { type: Number, required: true }
})

module.exports = AddressSchema
