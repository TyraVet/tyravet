const MONGOOSE = require('mongoose');
const BREED = require('./breed.js');

var Schema = MONGOOSE.Schema;

var PetSchema = new Schema({
	name: { type: String, required: true },
	birthdate: { type: Date },
	age: { type: Number },
	weight: { type: Number },
	breed: { type: BREED },
	femaleOrMale: { type: String },
	owner: { type: MONGOOSE.ObjectId, required: false },
	vaccinationRecord: { type: Array, required: false, defaul: [] },
	medialRecord: { type: Array, required: false, default: [] }
});

module.exports = PetSchema;
