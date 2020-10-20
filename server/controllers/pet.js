const PET = require('../models/pet.js');
const FS = require('fs');

/* Create Pet
 *
 * The user may want to create a pet to the application.
 *
 * When a client in created we first create it's pet. */
exports.createPet = (req, res) => {
	const pet = new PET({
		name: req.body.pet_name,
		birthdate: req.body.pet_birthdate,
		age: req.body.pet_age,
		weight: req.body.pet_weight,
		breed: req.body.pet_breed,
		female_or_male: req.body.pet_female_or_male,
	}).save((err, pet) => {
		if(err)
			return res.status(406).json(err);

		/* Success
		 *
		 * Send Pet to createClient method in Client Controller. */
		res.locals.pet = pet;
		next();
	});
};

/* Add Owner to Pet
 *
 * Once the client is created we update the pet to
 * set the owner attribute. */
exports.addOwnerToPet = (req, res) => {
	PET.findByIdAndUpdate(res.locals.pet._id,
						  { owner: res.locals.client._id },
						  err => {
		if(err)
			res.status(403).json(err);

		/* Success */
		res.status(201).json();
	});
};

/* Upload Profile Picture
 *
 * So the user may want to upload a profile picture for a pet.
 * What we need to do is before anything, create the uploads directory
 * to save all the pet profile pictures inside that directory.
 *
 * Once we have that directory we process the image, change it's name
 * for the pet's id and then save it. */
exports.uploadProfilePicture = async (req, res) => {
	if(req.files){
		const PICTURE = req.files.picture;

		const FOLDER = await checkPETPicturesFolder();

		if(FOLDER)
			PICTURE.mv('./uploads/pet-pictures/' + req.body.id + '.png',
					   err => {
				if(err)
					return res.status(406).json(err);

				/* Success */
				res.sendStatus(201);
			});
	}else{
		res.sendStatus(404);
	}
};

function checkPetPicturesFolder(){
	const PET_PICTURES_FOLDER = 'uploads/pet-pictures';

	try{
		if(!FS.existsSync(PET_PICTURES_FOLDER));
			FS.mkdirSync(PET_PICTURES_FOLDER);

		return true;
	}catch(err){
		console.error(err);
		return false;
	}
};

/* Get Profile Picture
 *
 * We need to check whether or not the file exists. */
exports.getProfilePicture = (req, res) => {
	const PET_PICTURE = 'uploads/pet-pictures/' + req.query.id + '.png';

	try{
		FS.access(PET_PICTURE, err => {
			if(err)
				return res.status(406).json(err);

			/* Success */
			res.sendStatus(200);
		})
	}catch(err){
		return res.status(406).json(err);
	}
};

/* Get Pet
 *
 * The user may want just one Pet to See, Edit or Delete it. */
exports.getPet = (req, res) => {
	PET.findById(req.query.id, (err, pet) => {
		if(err)
			res.status(403).json(err);

		if(pet)
			/* Success */
			res.status(200).json(pet);
		else
			res.sendStatus(404);
	});
};

/* Get all Pet
 *
 * The user may want to see a list of all the available pets. */
exports.getPets = (req, res) => {
	PET.find()
		  .populate('client')
		  .sort([['name', 'ascending']])
		  .exec((err, pets) => {
			  if(err)
				  return res.status(406).json(err);

			  /* Success */
			  res.status(200).json(pets);
		  });
};
