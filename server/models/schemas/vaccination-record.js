const MONGOOSE = require('mongoose');

var Schema = MONGOOSE.Schema;

var VaccinationRecord = new Schema({
	applicationDate: { type: Date, required: true },
	shot: { type: String, required: true },
	medic: { type: String, required: true },
	nextApplicationDate: { type: Date, required: true }
});

module.exports = VaccinationRecord;
