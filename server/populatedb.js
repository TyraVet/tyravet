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

function UserCreate(username, password, callback){
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

function BreedCreate(name, callback){
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

function ServiceCreate(name, price, type, callback){
	service_detail = {
		name: name,
		price: price,
		type: type
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

function CreateUsers(callback){
	ASYNC.series([
		function(callback) {
			UserCreate('admin', 'admin123', callback);
		}
	], callback);
};

function CreateBreeds(callback){
	ASYNC.series([
		function(callback){
			BreedCreate('Schnauzer', callback);
		},
		function(callback){
			BreedCreate('Rottweiler', callback);
		},
		function(callback){
			BreedCreate('Akita', callback);
		},
		function(callback){
			BreedCreate('Husky', callback);
		},
		function(callback){
			BreedCreate('Malamute', callback);
		},
		function(callback){
			BreedCreate('Bulldog', callback);
		},
		function(callback){
			BreedCreate('American Bully', callback);
		},
		function(callback){
			BreedCreate('Pit Bull', callback);
		},
		function(callback){
			BreedCreate('Basset Hound', callback);
		},
		function(callback){
			BreedCreate('Beagle', callback);
		},
		function(callback){
			BreedCreate('Bernese Mountain Dog', callback);
		},
		function(callback){
			BreedCreate('Border Collie', callback);
		},
		function(callback){
			BreedCreate('Boston Terrier', callback);
		},
		function(callback){
			BreedCreate('Boxer', callback);
		},
		function(callback){
			BreedCreate('Chihuahua', callback);
		},
		function(callback){
			BreedCreate('Chow Chow', callback);
		},
		function(callback){
			BreedCreate('Dachshund', callback);
		},
		function(callback){
			BreedCreate('Dalmatian', callback);
		},
		function(callback){
			BreedCreate('Dogo Argentino', callback);
		},
		function(callback){
			BreedCreate('Doberman', callback);
		},
		function(callback){
			BreedCreate('Springer Spaniel', callback);
		},
		function(callback){
			BreedCreate('French Bulldog', callback);
		},
		function(callback){
			BreedCreate('German Shepherd', callback);
		},
		function(callback){
			BreedCreate('Giant Schnauzer', callback);
		},
		function(callback){
			BreedCreate('Great Dane', callback);
		},
		function(callback){
			BreedCreate('Labrador Retriever', callback);
		},
		function(callback){
			BreedCreate('Miniature Schnauzer', callback);
		},
		function(callback){
			BreedCreate('Old English Sheepdog', callback);
		},
		function(callback){
			BreedCreate('Pekingese', callback);
		},
		function(callback){
			BreedCreate('Pomeranian', callback);
		},
		function(callback){
			BreedCreate('Pug', callback);
		},
		function(callback){
			BreedCreate('Shiba Inu', callback);
		},
		function(callback){
			BreedCreate('Shih Tzu', callback);
		},
		function(callback){
			BreedCreate('Terrier', callback);
		}
	], callback);
};

function CreateServices(callback){
	ASYNC.series([
		function(callback){
			ServiceCreate('Bath Mini', 120, 'grooming', callback);
		},
		function(callback){
			ServiceCreate('Bath Small', 150, 'grooming', callback);
		},
		function(callback){
			ServiceCreate('Bath Medium', 200, 'grooming', callback);
		},
		function(callback){
			ServiceCreate('Bath Large', 350, 'grooming', callback);
		},
		function(callback){
			ServiceCreate('Bath Extra Large', 500, 'grooming', callback);
		},
		function(callback){
			ServiceCreate('Bath Long Hair Mini', 150, 'grooming', callback);
		},
		function(callback){
			ServiceCreate('Bath Long Hair Small', 180, 'grooming', callback);
		},
		function(callback){
			ServiceCreate('Bath Long Hair Medium', 250, 'grooming', callback);
		},
		function(callback){
			ServiceCreate('Bath Long Hair Large', 450, 'grooming', callback);
		},
		function(callback){
			ServiceCreate('Bath Long Hair Extra Large', 600, 'grooming', callback);
		},
		function(callback){
			ServiceCreate('Haircut Without Knots Mini', 180, 'grooming', callback);
		},
		function(callback){
			ServiceCreate('Haircut Without Knots Small', 200, 'grooming', callback);
		},
		function(callback){
			ServiceCreate('Haircut Without Knots Medium', 350, 'grooming', callback);
		},
		function(callback){
			ServiceCreate('Haircut Without Knots Large', 550, 'grooming', callback);
		},
		function(callback){
			ServiceCreate('Haircut Without Knots Extra Large', 700, 'grooming', callback);
		},
		function(callback){
			ServiceCreate('Haircut With Knots Mini', 200, 'grooming', callback);
		},
		function(callback){
			ServiceCreate('Haircut With Knots Small', 250, 'grooming', callback);
		},
		function(callback){
			ServiceCreate('Haircut With Knots Medium', 450, 'grooming', callback);
		},
		function(callback){
			ServiceCreate('Haircut With Knots Large', 650, 'grooming', callback);
		},
		function(callback){
			ServiceCreate('Haircut With Knots Extra Large', 800, 'grooming', callback);
		},
		function(callback){
			ServiceCreate('Extra Bug', 50, 'grooming', callback);
		}
	], 'grooming', callback);
};

ASYNC.series([
	CreateUsers,
	CreateBreeds,
	CreateServices,
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
