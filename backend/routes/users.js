const express = require('express');
const route = express.Router();

const usersController = require('../controllers/UserController');

route.post('/register', usersController.register);

route.post('/login', usersController.login);

route.get('/:user_name', usersController.user_profile);

route.get('/', usersController.index);


module.exports = route;
