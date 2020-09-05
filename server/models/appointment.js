const mongoose = require('mongoose')
const Service = require('./schemas/service.js')
const Client = require('./schemas/client.js')

var Schema = mongoose.Schema

const AppointmentSchema = new Schema({
	service: { type: Service, required: true },
	client: { type: Client, required: true },
	hour: { type: String, required: true }
})

module.exports = mongoose.model('Appointment', AppointmentSchema)
