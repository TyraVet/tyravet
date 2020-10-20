const MONGOOSE = require('mongoose');

var Schema = MONGOOSE.Schema;

var AddressSchema = new Schema({
	street: { type: String, required: true },
	number: { type: Number, required: true },
	int_number: { type: Number, required: false },
	postal_code: { type: Number, required: true }
});

module.exports = MONGOOSE.model('Address', AddressSchema);
