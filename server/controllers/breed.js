const Breed = require('../models/breed.js')

/* Create Breed */
exports.post_create_breed = (req, res, next) => {
	if(err)
		res.sendStatus(401)

	/* Success */
	const breed = new Breed({
		name: req.body.name,
	}).save(err => {
		if(err)
			return next(err)

		/* Success */
		res.sendStatus(201).json(breed)
	})
}
