const Client = require('../models/client.js')
const Pet = require('../models/pet.js')
const Address = require('../models/address.js')

/* Create Client */
exports.post_create_client = (req, res, next) => {
	const address = new Address({
		street: req.body.street,
		number: req.body.number,
		intNumber: req.body.intNumber,
		postalCode: req.body.postalCode
	})

	const pet = new Pet({
		name: req.body.petName,
		birthday: req.body.petBirthday,
		age: req.body.petAge,
		weight: req.body.petWeight,
		breed: req.body.petBreed
	})

	let pets = []
	pets.push(pet)

	const client = new Client({
		name: req.body.name,
		phone: req.body.phone,
		pets: pets,
		address: address
	}).save(err => {
		if(err)
			return next(err)

		/* Success */
		res.sendStatus(201).json(client)
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
