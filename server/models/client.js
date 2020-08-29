const mongoose = require('mongoose')
const AddressSchema = require('./address.js')
const PetSchema = require('./pet.js')

var Schema = mongoose.Schema

var ClientSchema = new Schema({
	name: { type: String, required: true },
	phone: { type: Number, required: true },
	pets: { type: [PetSchema], required: true },
	address: { type: AddressSchema, default: {} }
})

module.exports = mongoose.model('Client', ClientSchema)
