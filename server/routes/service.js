const EXPRESS = require('express');
const ROUTER = EXPRESS.Router();
const PATH = require('path');
const AUTH_TOKEN = require('../middlewares/authenticateToken.js');

/* Require Controller Modules */
const SERVICE = require(PATH.join(__dirname, '../controllers/service.js'));

/* Service Routes */
ROUTER.get('/', AUTH_TOKEN, SERVICE.getServices);
ROUTER.post('/create', AUTH_TOKEN, SERVICE.createService);
ROUTER.get('/find', AUTH_TOKEN, SERVICE.getService);
ROUTER.post('/update', AUTH_TOKEN, SERVICE.update);
ROUTER.get('/delete', AUTH_TOKEN, SERVICE.delete);

module.exports = ROUTER;
