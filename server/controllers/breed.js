const BREED = require('../models/breed.js');

/* Create Breed */
exports.CreateBreed = (req, res) => {
	const MY_BREED = new BREED({
		name: req.body.name,
	}).save(err => {
		if(err)
			return res.status(406).json(err);

		/* Success */
		res.status(201).json(MY_BREED);
	});
};

/* Get all breeds */
exports.GetBreeds = (req, res) => {
	BREED.find()
		 .populate('breed')
		 .sort([['name', 'ascending']])
		 .exec((err, breeds) => {
			 if(err)
				 return res.status(406).json(err);

			 /* Success */
			 res.status(200).json(breeds);
		 });
};

/* Get a Breed */
exports.GetBreed = (req, res) => {
	BREED.findById(req.query.id, (err, breed) => {
		if(err)
			return res.status(404).json(err);

		/* Success */
		res.status(200).json(breed);
	});
};

/* Update Breed */
exports.Update = (req, res) => {
	BREED.findByIdAndUpdate(req.body.id, {
		_id: req.body.id,
		name: req.body.name
	}, err => {
		if(err)
			return res.status(406).json(err);

		/* Success */
		res.sendStatus(201);
	});
};

/* Delete Breed */
exports.Delete = (req, res) => {
	BREED.findByIdAndRemove(req.query.id, err => {
		if(err)
			return res.status(406).json(err);

		/* Success */
		res.sendStatus(200);
	});
};
