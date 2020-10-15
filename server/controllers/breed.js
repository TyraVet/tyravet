const Breed = require('../models/breed.js')

/* Create Breed */
exports.post_create_breed = (req, res, next) => {
	const breed = new Breed({
		name: req.body.name,
	}).save(err => {
		if(err)
			return next(err)

		/* Success */
		res.sendStatus(201).json(breed)
	})
}

/* Get all Breeds */
exports.get_breeds = (req, res, next) => {
	Breed.find()
		 .populate('breed')
		 .sort([['name', 'ascending']])
		 .exec((err, breeds) => {
			 if(err)
				 return res.sendStatus(403)

			 /* Success */
			 res.json(breeds)
		 })
}

/* Get one Breed */
exports.get_breed = (req, res) => {
	Breed.findById(req.query.id, (err, theBreed) => {
		if(err)
			return res.sendStatus(404)

		/* Success */
		res.status(200).json(theBreed)
	})
}
