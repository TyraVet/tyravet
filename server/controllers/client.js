const CLIENT = require('../models/client.js');
const PET = require('../models/pet.js');
const ADDRESS = require('../models/address.js');

/* Create Client
 *
 * The user may want to create a client for the application.
 *
 * Here we get the pet previously created and use it to
 * populate that attribute of the client. */
exports.createClient = (req, res, next) => {
	const address = new ADDRESS({
		street: req.body.street,
		number: req.body.number,
		int_number: req.body.int_number,
		postal_code: req.body.postal_code
	});

	var pets = [];
	pets.push(res.locals.pet._id);

	const client = new CLIENT({
		name: req.body.name,
		phone: req.body.phone,
		pets: pets,
		address: address
	}).save((err, client) => {
		if(err)
			return next(err);

		/* Success */
		res.locals.client = client;
		next();
	});
};

/* Get all Clients
 *
 * The user may want to get the list of all available clients. */
exports.getClients = (req, res) => {
	CLIENT.find()
		  .populate('client')
		  .sort([['name', 'ascending']])
		  .exec((err, clients) => {
			  if(err)
				  return res.sendStatus(403);

			  /* Success */
			  res.json(clients);
		  });
};

/* Get one Client
 *
 * The user may want to see only one Client to Edit, Delete or See it. */
exports.getClient = (req, res) => {
	CLIENT.findById(req.query.id, (err, client) => {
		if(err)
			res.status(403).json();

		if(client)
			/* Success */
			res.status(200).json(client);
		else
			res.status(404).json();
	});
};

/* Add Pet to Client
 *
 * When our Client is created we add the main pet. */
exports.addPetToClient = (req, res, next) => {
	CLIENT.findById(req.body.id, (err, client) => {
		if(err)
			res.status(403).json(err);

		/* Success */
		let pets = client.pets;
		pets.push(res.locals.pet);

		CLIENT.findByIdAndUpdate(req.body.id,
								{ pets: pets },
								(err, client) => {
			if(err)
				res.status(403).json(err);

			/* Success */
			res.locals.client = client;
			next();
		});
	});
};
