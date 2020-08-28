const mongoose = require('mongoose')
const BreedSchema = require('./breedSchema.js')

var Schema = mongoose.Schema

var PetSchema = new Schema({
	name: { type: String, required: true },
	age: { type: Number },
	weight: { type: Number },
	birthday: { type Date },
	breed: { type BreedSchema }
})

module.exports = PetSchema
