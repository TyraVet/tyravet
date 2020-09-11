const mongoose = require('mongoose')
const Service = require('./service.js')
const Client = require('./client.js')

var Schema = mongoose.Schema

const AppointmentSchema = new Schema({
	service: { type: Service, required: true },
	client: { type: Client, required: true },
	hour: { type: String, required: true },
	done: { type: Boolean, default: false }
})

module.exports = AppointmentSchema
