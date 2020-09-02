const mongoose = require('mongoose')
const BreedSchema = require('./breed.js')

var Schema = mongoose.Schema

var PetSchema = new Schema({
	name: { type: String, required: true },
	birthday: { type: Date },
	age: { type: Number },
	weight: { type: Number },
	breed: { type: BreedSchema }
})

module.exports = PetSchema
