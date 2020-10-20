const EXPRESS = require('express');
const ROUTER = EXPRESS.Router();
const PATH = require('path');
const AUTH_TOKEN = require('../middlewares/authenticateToken.js');

/* Require Controller Modules */
const CLIENT = require(PATH.join(__dirname, '../controllers/client.js'));
const PET = require(PATH.join(__dirname, '../controllers/pet.js'));

/* Client Routes */
ROUTER.post('/create',
			AUTH_TOKEN,
			PET.createPet,
			CLIENT.createClient,
			PET.addOwnerToPet);
ROUTER.get('/', AUTH_TOKEN, CLIENT.getClients);
ROUTER.get('/client', AUTH_TOKEN, CLIENT.getClient);
ROUTER.post('/add-pet',
			AUTH_TOKEN,
			PET.createPet,
			CLIENT.addPetToClient,
			PET.addOwnerToPet);

module.exports = ROUTER;
