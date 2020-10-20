const EXPRESS = require('express');
const ROUTER = EXPRESS.Router();
const PATH = require('path');
const AUTH_TOKEN = require('../middlewares/authenticateToken.js');

/* Require Controller Modules */
const BREED = require(PATH.join(__dirname, '../controllers/breed.js'));

/* Breed Routes */
ROUTER.post('/create', AUTH_TOKEN, BREED.createBreed);
ROUTER.get('/', AUTH_TOKEN, BREED.getBreeds);
ROUTER.get('/find', AUTH_TOKEN, BREED.getBreed);
ROUTER.post('/update', AUTH_TOKEN, BREED.update);
ROUTER.get('/delete', AUTH_TOKEN, BREED.delete);

module.exports = ROUTER;
