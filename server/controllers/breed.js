const Breed = require('../models/breed.js')

/* Create Breed */
exports.post_create_breed = (req, res) => {
	const breed = new Breed({
		name: req.body.name,
	}).save(err => {
		if(err)
			return res.status(406).json(err)

		/* Success */
		res.status(201).json(breed)
	})
}

/* Get all Breeds */
exports.get_breeds = (req, res, next) => {
	Breed.find()
		 .populate('breed')
		 .sort([['name', 'ascending']])
		 .exec((err, breeds) => {
			 if(err)
				 return res.status(406).json(err)

			 /* Success */
			 res.status(200).json(breeds)
		 })
}

/* Get one Breed */
exports.get_breed = (req, res) => {
	Breed.findById(req.query.id, (err, theBreed) => {
		if(err)
			return res.status(404).json(err)

		/* Success */
		res.status(200).json(theBreed)
	})
}
