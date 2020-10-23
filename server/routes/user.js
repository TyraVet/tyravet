const EXPRESS = require('express');
const ROUTER = EXPRESS.Router();
const PATH = require('path');
const AUTH_TOKEN = require('../middlewares/authenticateToken.js');

/* Require Controller Modules */
const USER = require(PATH.join(__dirname, '../controllers/user.js'));

/* User Routes */
ROUTER.get('/find', AUTH_TOKEN, USER.GetUser);
ROUTER.get('/login', USER.Login);
ROUTER.post('/signup', AUTH_TOKEN, USER.Signup);
ROUTER.post('/update', AUTH_TOKEN, USER.Update);
ROUTER.post('/delete', AUTH_TOKEN, USER.Delete);
ROUTER.get('/', AUTH_TOKEN, USER.GetUsers);

module.exports = ROUTER;
