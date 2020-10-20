const MONGOOSE = require('mongoose');

var Schema = MONGOOSE.Schema;

var TypeSchema = new Schema({
	name: { type: String, require: true }
});

module.exports = MONGOOSE.model('Type', TypeSchema);
