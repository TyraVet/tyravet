const Service = require('../models/service.js')

/* Get all Services */
exports.get_services = (req, res) => {
	Service.find()
		   .populate('service')
		   .exec((err, services) => {
			   if(err)
				   return res.status(406).json(err)

			   /* Succes */
			   res.status(200).json(services)
		   })
}

/* Get one Service */
exports.get_service = (req, res) => {
	Service.findById(req.query.id, (err, theService) => {
		if(err)
			return res.status(404).json(err)

		/* Success */
		res.status(200).json(theService)
	})
}

/* Update Service */
exports.update_service = (req, res) => {
	Service.findByIdAndUpdate(req.body.id, {
		_id: req.body.id,
		name: req.body.name,
		price: req.body.price
	}, (err) => {
		if(err)
			return res.status(406).json(err)

		/* Success */
		res.sendStatus(201)
	})
}

/* Create Service */
exports.post_create_service = (req, res) => {
	const service = new Service({
		name: req.body.name,
		price: req.body.price
	}).save(err => {
		if(err)
			return res.status(406).json(err)

		/* Success */
		res.sendStatus(201)
	})
}

/* Delete Service */
exports.delete_service = (req, res) => {
	Service.findByIdAndRemove(req.query.id, (err) => {
		if(err)
			res.status(406).json(err)

		/* Success */
		res.sendStatus(200)
	})
}
