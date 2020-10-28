const EXPRESS = require('express');
const ROUTER = EXPRESS.Router();
const PATH = require('path');
const AUTH_TOKEN = require('../middlewares/authenticateToken.js');

/* Require Controller Modules */
const SERVICE = require(PATH.join(__dirname, '../controllers/service.js'));

/* Service Routes */
ROUTER.get('/', AUTH_TOKEN, SERVICE.GetServices);
ROUTER.post('/create', AUTH_TOKEN, SERVICE.CreateService);
ROUTER.get('/find', AUTH_TOKEN, SERVICE.GetService);
ROUTER.get('/shots', AUTH_TOKEN, SERVICE.GetShots);
ROUTER.post('/update', AUTH_TOKEN, SERVICE.Update);
ROUTER.get('/delete', AUTH_TOKEN, SERVICE.Delete);

module.exports = ROUTER;
