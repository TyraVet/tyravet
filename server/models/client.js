const MONGOOSE = require('mongoose');
const ADDRESS = require('./schemas/address.js');

var Schema = MONGOOSE.Schema;

var ClientSchema = new Schema({
	name: { type: String, required: true },
	phone: { type: Number, required: true },
	pets: { type: [MONGOOSE.ObjectId], required: true },
	address: { type: ADDRESS, default: {} }
});

module.exports = MONGOOSE.model('Client', ClientSchema);
