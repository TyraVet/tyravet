const MONGOOSE = require('mongoose');
const SERVICE = require('./service.js');

var Schema = MONGOOSE.Schema;

const AppointmentSchema = new Schema({
	service: { type: SERVICE, required: true },
	clientId: { type: String, required: true },
	petId: { type: String, required: true },
	hour: { type: String, required: true },
	done: { type: Boolean, default: false }
});

module.exports = AppointmentSchema;
