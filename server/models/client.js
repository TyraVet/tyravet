const mongoose = require('mongoose')
const AddressSchema = require('./address.js')
const PetSchema = require('./pet.js')

var Schema = mongoose.Schema

var ClientSchema = new Schema({
	name: { type: String, required: true },
	pets: { type: [PetSchema], required: true },
	address: { type: AddressSchema, default: {} },
	phone: { type: Number, required: true }
})

module.exports = mongoose.model('Client', ClientSchema)
