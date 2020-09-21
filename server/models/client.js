const mongoose = require('mongoose')
const Address = require('./schemas/address.js')

var Schema = mongoose.Schema

var ClientSchema = new Schema({
	name: { type: String, required: true },
	phone: { type: Number, required: true },
	pets: { type: [mongoose.ObjectId], required: true },
	address: { type: Address, default: {} }
})

module.exports = mongoose.model('Client', ClientSchema)
