const express = require('express');
const route = express.Router();

const usersController = require('../controllers/UserController');


route.get('/register', usersController.register);
//route.post('/save', usersController.register);

route.get('/login', usersController.login);
//route.post('/save', usersController.register);

route.get('/:user_name', usersController.user_profile);

route.get('/', usersController.index);


module.exports = route;
