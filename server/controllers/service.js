const Service = require('../models/service.js')

/* Get all Services */
exports.get_services = (req, res, next) => {
	Service.find()
		   .populate('service')
		   .exec((err, services) => {
			   if(err)
				   return res.sendStatus(403)

			   /* Succes */
			   res.json(services)
		   })
}
