const SERVICE = require('../models/service.js');

/* Get all Services
 *
 * The user may want to see a list of all available services. */
exports.GetServices = (req, res) => {
	SERVICE.find()
		   .populate('service')
		   .exec((err, services) => {
			   if(err)
				   return res.status(406).json(err);

			   /* Succes */
			   res.status(200).json(services);
		   });
};

/* Get one Service
 *
 * The user may want to get just one Servie to See, Edit or Delete it. */
exports.GetService = (req, res) => {
	SERVICE.findById(req.query.id, (err, service) => {
		if(err)
			return res.status(404).json(err);

		/* Success */
		res.status(200).json(service);
	});
};

/* Update Service
 *
 * The user can update any service. */
exports.Update = (req, res) => {
	SERVICE.findByIdAndUpdate(req.body.id, {
		_id: req.body.id,
		name: req.body.name,
		price: req.body.price,
		type: req.body.type
	}, (err) => {
		if(err)
			return res.status(406).json(err);

		/* Success */
		res.sendStatus(201);
	});
};

/* Create Service
 *
 * The user can create services. */
exports.CreateService = (req, res) => {
	const Service = new SERVICE({
		name: req.body.name,
		price: req.body.price,
		type: req.body.type
	}).save(err => {
		if(err)
			return res.status(406).json(err);

		/* Success */
		res.sendStatus(201);
	});
};

/* Delete Service
 *
 * The user can delete any service. */
exports.Delete = (req, res) => {
	SERVICE.findByIdAndRemove(req.query.id, (err) => {
		if(err)
			res.status(406).json(err);

		/* Success */
		res.sendStatus(200);
	});
};
