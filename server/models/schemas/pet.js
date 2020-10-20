const mongoose = require('mongoose')
const BreedSchema = require('./breed.js')

var Schema = mongoose.Schema

var PetSchema = new Schema({
	name: { type: String, required: true },
	birthday: { type: Date },
	age: { type: Number },
	weight: { type: Number },
	breed: { type: BreedSchema },
	female_or_male: { type: String },
	owner: { type: mongoose.ObjectId, required: false },
	vaccinationRecord: { type: Array, required: false, defaul: [] },
	medialRecord: { type: Array, required: false, default: [] }
})

module.exports = PetSchema
