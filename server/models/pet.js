const MONGOOSE = require('mongoose');
const BREED = require('./schemas/breed.js');

var Schema = MONGOOSE.Schema;

var PetSchema = new Schema({
	name: { type: String, required: true },
	birthdate: { type: Date },
	age: { type: Number },
	weight: { type: Number },
	breed: { type: BREED },
	female_or_male: { type: String },
	owner: { type: MONGOOSE.ObjectId, required: false },
	vaccination_record: { type: Array, required: false, defaul: [] },
	medial_record: { type: Array, required: false, default: [] }
});

module.exports = MONGOOSE.model('Pet', PetSchema);
