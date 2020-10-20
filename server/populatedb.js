require('dotenv').config();

const ASYNC = require('async');
const BCRYPTJS = require('bcryptjs');
const User = require('./models/user.js');
const Type = require('./models/type.js');
const Breed = require('./models/breed.js');
const Service = require('./models/service.js');

const MONGOOSE = require('mongoose');

MONGOOSE.connect(process.env.MONGODB_TYRAWEB_TEST, { useNewUrlParser: true });
MONGOOSE.Promise = global.Promise;

const DB = MONGOOSE.connection;
DB.on('error', console.error.bind(console, 'MongoDB connection error:'));
DB.once('open', () => console.log('Connected to database!'));

var users = [];
var breeds = [];
var services = [];

function userCreate(username, password, callback){
	userdetail = {
		username : username,
		password: password,
		type: new Type({ name: 'admin' })
	};

	var myUser = new User(userdetail);

	BCRYPTJS.hash(myUser.password, 10, (err, hashed_password) => {
		if(err)
			res.sendStatus(401);

		/* Success */
		const user = new User({
			username: myUser.username,
			password: hashed_password,
			type: myUser.type
		}).save(err => {
			if(err){
				callback(err, null);
				return;
			}
			console.log('New User: ' + myUser);
			users.push(myUser);
			callback(null, myUser);
		});
	});
};

function breedCreate(name, callback){
	breed_detail = {
		name: name
	};

	var myBreed = new Breed(breed_detail);

	myBreed.save(err => {
		if(err){
			callback(err, null);
			return;
		}

		breeds.push(myBreed);
		callback(null, myBreed);
	});
};

function serviceCreate(name, price, callback){
	service_detail = {
		name: name,
		price: price
	};

	var myService = new Service(service_detail);

	myService.save(err => {
		if(err){
			callback(err, null);
			return;
		}

		services.push(myService);
		callback(null, myService);
	});
};

function createUsers(callback){
	ASYNC.series([
		function(callback) {
			userCreate('admin', 'admin12', callback);
		}
	], callback);
};

function createBreeds(callback){
	ASYNC.series([
		function(callback){
			breedCreate('Schnauzer', callback);
		},
		function(callback){
			breedCreate('Rottweiler', callback);
		},
		function(callback){
			breedCreate('Akita', callback);
		},
		function(callback){
			breedCreate('Husky', callback);
		},
		function(callback){
			breedCreate('Malamute', callback);
		},
		function(callback){
			breedCreate('Bulldog', callback);
		},
		function(callback){
			breedCreate('American Bully', callback);
		},
		function(callback){
			breedCreate('Pit Bull', callback);
		},
		function(callback){
			breedCreate('Basset Hound', callback);
		},
		function(callback){
			breedCreate('Beagle', callback);
		},
		function(callback){
			breedCreate('Bernese Mountain Dog', callback);
		},
		function(callback){
			breedCreate('Border Collie', callback);
		},
		function(callback){
			breedCreate('Boston Terrier', callback);
		},
		function(callback){
			breedCreate('Boxer', callback);
		},
		function(callback){
			breedCreate('Chihuahua', callback);
		},
		function(callback){
			breedCreate('Chow Chow', callback);
		},
		function(callback){
			breedCreate('Dachshund', callback);
		},
		function(callback){
			breedCreate('Dalmatian', callback);
		},
		function(callback){
			breedCreate('Dogo Argentino', callback);
		},
		function(callback){
			breedCreate('Doberman', callback);
		},
		function(callback){
			breedCreate('Springer Spaniel', callback);
		},
		function(callback){
			breedCreate('French Bulldog', callback);
		},
		function(callback){
			breedCreate('German Shepherd', callback);
		},
		function(callback){
			breedCreate('Giant Schnauzer', callback);
		},
		function(callback){
			breedCreate('Great Dane', callback);
		},
		function(callback){
			breedCreate('Labrador Retriever', callback);
		},
		function(callback){
			breedCreate('Miniature Schnauzer', callback);
		},
		function(callback){
			breedCreate('Old English Sheepdog', callback);
		},
		function(callback){
			breedCreate('Pekingese', callback);
		},
		function(callback){
			breedCreate('Pomeranian', callback);
		},
		function(callback){
			breedCreate('Pug', callback);
		},
		function(callback){
			breedCreate('Shiba Inu', callback);
		},
		function(callback){
			breedCreate('Shih Tzu', callback);
		},
		function(callback){
			breedCreate('Terrier', callback);
		}
	], callback);
};

function createServices(callback){
	ASYNC.series([
		function(callback){
			serviceCreate('Bath Mini', 120, callback);
		},
		function(callback){
			serviceCreate('Bath Small', 150, callback);
		},
		function(callback){
			serviceCreate('Bath Medium', 200, callback);
		},
		function(callback){
			serviceCreate('Bath Large', 350, callback);
		},
		function(callback){
			serviceCreate('Bath Extra Large', 500, callback);
		},
		function(callback){
			serviceCreate('Bath Long Hair Mini', 150, callback);
		},
		function(callback){
			serviceCreate('Bath Long Hair Small', 180, callback);
		},
		function(callback){
			serviceCreate('Bath Long Hair Medium', 250, callback);
		},
		function(callback){
			serviceCreate('Bath Long Hair Large', 450, callback);
		},
		function(callback){
			serviceCreate('Bath Long Hair Extra Large', 600, callback);
		},
		function(callback){
			serviceCreate('Haircut Without Knots Mini', 180, callback);
		},
		function(callback){
			serviceCreate('Haircut Without Knots Small', 200, callback);
		},
		function(callback){
			serviceCreate('Haircut Without Knots Medium', 350, callback);
		},
		function(callback){
			serviceCreate('Haircut Without Knots Large', 550, callback);
		},
		function(callback){
			serviceCreate('Haircut Without Knots Extra Large', 700, callback);
		},
		function(callback){
			serviceCreate('Haircut With Knots Mini', 200, callback);
		},
		function(callback){
			serviceCreate('Haircut With Knots Small', 250, callback);
		},
		function(callback){
			serviceCreate('Haircut With Knots Medium', 450, callback);
		},
		function(callback){
			serviceCreate('Haircut With Knots Large', 650, callback);
		},
		function(callback){
			serviceCreate('Haircut With Knots Extra Large', 800, callback);
		},
		function(callback){
			serviceCreate('Extra Bug', 50, callback);
		}
	], callback);
};

ASYNC.series([
	createUsers,
	createBreeds,
	createServices,
], function(err, results){
	if (err) {
		console.log('FINAL ERR: ' + err);
	}
	else {
		console.log('Users: ' + users);
		console.log('Breeds: ' + breeds);
		console.log('Services: ' + services);
	}
	// All done, disconnect from database
	MONGOOSE.connection.close();
});
