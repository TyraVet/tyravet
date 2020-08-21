require('dotenv').config()

const async = require('async')
const bcryptjs = require('bcryptjs')
const User = require('./models/user.js')
const Type = require('./models/type.js')

var mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_TYRAWEB_TEST, { useNewUrlParser: true })
mongoose.Promise = global.Promise
var db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

var users = []

function userCreate(username, password, callback){
	userdetail = {
		username : username,
		password: password,
		type: new Type({ name: 'admin' })
	}

	var myUser = new User(userdetail)

	bcryptjs.hash(myUser.password, 10, (err, hashedPassword) => {
		if(err)
			res.sendStatus(401)

		/* Success */
		const user = new User({
			username: myUser.username,
			password: hashedPassword,
			type: myUser.type
		}).save(err => {
			if(err){
				callback(err, null)
				return
			}
			console.log('New User: ' + myUser)
			users.push(myUser)
			callback(null, myUser)
		})
	})
}

function createUsers(callback) {
	async.series([
		function(callback) {
			userCreate('admin', 'admin12', callback)
		}
	], callback)
}

async.series([
	createUsers
], function(err, results){
	if (err) {
		console.log('FINAL ERR: ' + err)
	}
	else {
		console.log('Users: ' + users)
	}
	// All done, disconnect from database
	mongoose.connection.close()
})
