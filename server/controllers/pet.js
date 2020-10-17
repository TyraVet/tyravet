const Pet = require('../models/pet.js')
const fs = require('fs')

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

/* Upload Profile Picture
 *
 * So the user may want to upload a profile picture for a pet.
 * What we need to do is before anything, create the uploads directory
 * to save all the pet profile pictures inside that directory.
 *
 * Once we have that directory we process the image, change it's name
 * for the pet's id and then save it. */
exports.upload_profile_picture = async (req, res) => {
	if(req.files){
		const picture = req.files.picture

		const folder = await checkPetPicturesFolder()
		if(folder)
			picture.mv('./uploads/pet-pictures/' + req.body.id + '.png',
					   err => {
				if(err)
					return res.status(406).json(err)

				/* Success */
				res.sendStatus(201)
			})
	}else{
		res.sendStatus(404)
	}
}

function checkPetPicturesFolder(){
	const pet_pictures_folder = 'uploads/pet-pictures'

	try{
		if(!fs.existsSync(pet_pictures_folder))
			fs.mkdirSync(pet_pictures_folder)

		return true
	}catch(err){
		console.error(err)
	}
}

/* Get Profile Picture
 *
 * We need to check whether or not the file exists. */
exports.get_profile_picture = (req, res) => {
	const pet_picture = 'uploads/pet-pictures/' + req.query.id + '.png'
	console.log(pet_picture)

	try{
		fs.access(pet_picture, err => {
			if(err)
				return res.status(406).json(err)

			/* Success */
			res.sendStatus(200)
		})
	}catch(err){
		console.error(err)
	}
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
