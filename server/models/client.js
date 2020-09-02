const mongoose = require('mongoose')
const Address = require('./schemas/address.js')
const Pet = require('./schemas/pet.js')

var Schema = mongoose.Schema

var ClientSchema = new Schema({
	name: { type: String, required: true },
	phone: { type: Number, required: true },
	pets: { type: [Pet], required: true },
	address: { type: Address, default: {} }
})

module.exports = mongoose.model('Client', ClientSchema)
