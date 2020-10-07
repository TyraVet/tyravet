const Service = require('../models/service.js')

/* Get all Services */
exports.get_services = (req, res) => {
	Service.find()
		   .populate('service')
		   .exec((err, services) => {
			   if(err)
				   return res.sendStatus(403)

			   /* Succes */
			   res.json(services)
		   })
}

/* Get one Service */
exports.get_service = (req, res) => {
	Service.findById(req.query.id, (err, theService) => {
		if(err)
			res.status(404).json(err)

		/* Success */
		res.status(200).json(theService)
	})
}
