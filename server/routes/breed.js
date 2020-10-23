const EXPRESS = require('express');
const ROUTER = EXPRESS.Router();
const PATH = require('path');
const AUTH_TOKEN = require('../middlewares/authenticateToken.js');

/* Require Controller Modules */
const BREED = require(PATH.join(__dirname, '../controllers/breed.js'));

/* Breed Routes */
ROUTER.post('/create', AUTH_TOKEN, BREED.CreateBreed);
ROUTER.get('/', AUTH_TOKEN, BREED.GetBreeds);
ROUTER.get('/find', AUTH_TOKEN, BREED.GetBreed);
ROUTER.post('/update', AUTH_TOKEN, BREED.Update);
ROUTER.get('/delete', AUTH_TOKEN, BREED.Delete);

module.exports = ROUTER;
