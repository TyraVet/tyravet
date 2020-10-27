const MONGOOSE = require('mongoose');

var Schema = MONGOOSE.Schema;

var ServiceSchema = new Schema({
	name: { type: String, required: true },
	price: { type: Number, required: true },
	type: { type: String, required: true }
});

module.exports = MONGOOSE.model('Service', ServiceSchema);
