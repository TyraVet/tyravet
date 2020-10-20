const MONGOOSE = require('mongoose');
const APPOINTMENT = require('./schemas/appointment.js');

var Schema = MONGOOSE.Schema;

const DayScheduleSchema = new Schema({
	date: { type: Date, required: true },
	appointments: { type: [APPOINTMENT], required: true }
});

module.exports = MONGOOSE.model('DaySchedule', DayScheduleSchema);
