require('dotenv').config()

const async = require('async')
const bcryptjs = require('bcryptjs')
const User = require('./models/user.js')
const Type = require('./models/type.js')
const Breed = require('./models/breed.js')

var mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_TYRAWEB_TEST, { useNewUrlParser: true })
mongoose.Promise = global.Promise
var db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

var users = []
var breeds = []

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

function breedCreate(name, callback){
	breed_detail = {
		name: name
	}

	var myBreed = new Breed(breed_detail)

	myBreed.save(err => {
		if(err){
			callback(err, null)
			return
		}

		breeds.push(myBreed)
		callback(null, myBreed)
	})
}

function createUsers(callback){
	async.series([
		function(callback) {
			userCreate('admin', 'admin12', callback)
		}
	], callback)
}

function createBreeds(callback){
	async.series([
		function(callback){
			breedCreate('Schnauzer', callback)
		},
		function(callback){
			breedCreate('Rottweiler', callback)
		},
		function(callback){
			breedCreate('Akita', callback)
		},
		function(callback){
			breedCreate('Husky', callback)
		},
		function(callback){
			breedCreate('Malamute', callback)
		},
		function(callback){
			breedCreate('Bulldog', callback)
		},
		function(callback){
			breedCreate('American Bully', callback)
		},
		function(callback){
			breedCreate('Pit Bull', callback)
		},
		function(callback){
			breedCreate('Basset Hound', callback)
		},
		function(callback){
			breedCreate('Beagle', callback)
		},
		function(callback){
			breedCreate('Bernese Mountain Dog', callback)
		},
		function(callback){
			breedCreate('Border Collie', callback)
		},
		function(callback){
			breedCreate('Boston Terrier', callback)
		},
		function(callback){
			breedCreate('Boxer', callback)
		},
		function(callback){
			breedCreate('Chihuahua', callback)
		},
		function(callback){
			breedCreate('Chow Chow', callback)
		},
		function(callback){
			breedCreate('Dachshund', callback)
		},
		function(callback){
			breedCreate('Dalmatian', callback)
		},
		function(callback){
			breedCreate('Dogo Argentino', callback)
		},
		function(callback){
			breedCreate('Doberman', callback)
		},
		function(callback){
			breedCreate('Springer Spaniel', callback)
		},
		function(callback){
			breedCreate('French Bulldog', callback)
		},
		function(callback){
			breedCreate('German Shepherd', callback)
		},
		function(callback){
			breedCreate('Giant Schnauzer', callback)
		},
		function(callback){
			breedCreate('Great Dane', callback)
		},
		function(callback){
			breedCreate('Labrador Retriever', callback)
		},
		function(callback){
			breedCreate('Miniature Schnauzer', callback)
		},
		function(callback){
			breedCreate('Old English Sheepdog', callback)
		},
		function(callback){
			breedCreate('Pekingese', callback)
		},
		function(callback){
			breedCreate('Pomeranian', callback)
		},
		function(callback){
			breedCreate('Pug', callback)
		},
		function(callback){
			breedCreate('Shiba Inu', callback)
		},
		function(callback){
			breedCreate('Shih Tzu', callback)
		},
		function(callback){
			breedCreate('Terrier', callback)
		}
	], callback)
}

async.series([
	createUsers
	createBreeds
], function(err, results){
	if (err) {
		console.log('FINAL ERR: ' + err)
	}
	else {
		console.log('Users: ' + users)
		console.log('Breeds: ' + breeds)
	}
	// All done, disconnect from database
	mongoose.connection.close()
})
