const Client = require('../models/client.js')
const Pet = require('../models/pet.js')
const Address = require('../models/address.js')

/* Create Client */
/* Here we get the pet previously created and use it to
 * populate that attribute of the client. */
exports.post_create_client = (req, res, next) => {
	const address = new Address({
		street: req.body.street,
		number: req.body.number,
		intNumber: req.body.intNumber,
		postalCode: req.body.postalCode
	})

	var pets = []
	pets.push(res.locals.pet._id)

	const client = new Client({
		name: req.body.name,
		phone: req.body.phone,
		pets: pets,
		address: address
	}).save((err, theClient) => {
		if(err)
			return next(err)

		/* Success */
		res.locals.client = theClient
		next()
	})
}

/* Get all Clients */
exports.get_clients = (req, res, next) => {
	Client.find()
		  .populate('client')
		  .sort([['name', 'ascending']])
		  .exec((err, clients) => {
			  if(err)
				  return res.sendStatus(403)

			  /* Success */
			  res.json(clients)
		  })
}

/* Get one Client */
exports.get_client = (req, res, next) => {
	Client.findById(req.query.id, (err, client) => {
		if(err)
			res.status(403).json()

		if(client)
			/* Success */
			res.status(200).json(client)
		else
			res.status(404).json()
	})
}

/* Add Pet to Client */
exports.post_add_pet = (req, res, next) => {
	const pet = new Pet({
		name: req.body.petName,
		birthday: req.body.petBirthday,
		age: req.body.petAge,
		weight: req.body.petWeight,
		breed: req.body.petBreed,
		owner: req.body.id
	})

	Client.findById(req.body.id, (err, client) => {
		if(err)
			res.status(403).json(err)

		/* Success */
		let pets = client.pets
		pets.push(pet)

		Client.findByIdAndUpdate(req.body.id,
								{ pets: pets },
								(err, theClient) => {
			if(err)
				res.status(403).json(err)

			/* Success */
			res.status(201).json(theClient)
		})
	})
}
