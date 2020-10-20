const MONGOOSE = require('mongoose');

var Schema = MONGOOSE.Schema;

var BreedSchema = new Schema({
	name: { type: String, required: true }
});

module.exports = MONGOOSE.model('Breed', BreedSchema);
