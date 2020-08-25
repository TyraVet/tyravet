const mongoose = require('mongoose')

var Schema = mongoose.Schema

var PetSchema = new Schema({
	name: { type: String, required: true },
	age: { type: Number },
	weight: { type: Number },
	birthday: { type Object },
	breed: { type Object }
})

module.exports = mongoose.model('Pet', PetSchema)
