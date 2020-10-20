const EXPRESS = require('express');
const ROUTER = EXPRESS.Router();
const PATH = require('path');
const AUTH_TOKEN = require('../middlewares/authenticateToken.js');

/* Require Controller Modules */
const USER = require(PATH.join(__dirname, '../controllers/user.js'));

/* User Routes */
ROUTER.get('/find', AUTH_TOKEN, USER.getUser);
ROUTER.get('/login', USER.login);
ROUTER.post('/signup', AUTH_TOKEN, USER.signup);
ROUTER.post('/update', AUTH_TOKEN, USER.update);
ROUTER.post('/delete', AUTH_TOKEN, USER.delete);
ROUTER.get('/', AUTH_TOKEN, USER.getUsers);

module.exports = ROUTER;
