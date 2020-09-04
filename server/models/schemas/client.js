const mongoose = require('mongoose')
const Address = require('./address.js')
const Pet = require('./pet.js')

var Schema = mongoose.Schema

var ClientSchema = new Schema({
	name: { type: String, required: true },
	phone: { type: Number, required: true },
	pets: { type: [Pet], required: true },
	address: { type: Address, default: {} }
})

module.exports = ClientSchema
