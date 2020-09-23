const Pet = require('../models/pet.js')

/* Create Pet */
/* When a client in created we first create it's pet. */
exports.post_create_pet = (req, res, next) => {
	const pet = new Pet({
		name: req.body.petName,
		birthday: req.body.petBirthday,
		age: req.body.petAge,
		weight: req.body.petWeight,
		breed: req.body.petBreed
	}).save((err, thePet) => {
		if(err)
			return next(err)

		/* Success */
		/* Send Pet to next method */
		res.locals.pet = thePet
		next()
	})
}

/* Add Owner to Pet */
/* Once the client is created we update the pet to
 * set the owner attribute. */
exports.post_add_owner = (req, res) => {
	Pet.findByIdAndUpdate(res.locals.pet._id,
						  { owner: res.locals.client._id },
						  (err, thePet) => {
		if(err)
			res.status(403).json(err)

		/* Success */
		res.status(201).json()
	})
}

/* Upload Profile Picture */
exports.post_upload_profile_picture = (req, res) => {
	res.json({ error: 'Not implemented yet' })
}

/* Get Pet */
/* Find Pet by Id. */
exports.get_pet = (req, res) => {
	Pet.findById(req.query.id, (err, pet) => {
		if(err)
			res.status(403).json()

		if(pet)
			/* Success */
			res.status(200).json(pet)
		else
			res.status(404).json()
	})
}

/* Get all Pets */
exports.get_pets = (req, res) => {
	Pet.find()
		  .populate('client')
		  .sort([['name', 'ascending']])
		  .exec((err, pets) => {
			  if(err)
				  return res.sendStatus(403)

			  /* Success */
			  res.json(pets)
		  })
}
