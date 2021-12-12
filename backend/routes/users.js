const express = require('express');
const route = express.Router();

const usersController = require('../controllers/UserController');

route.get('/:slug', usersController.user_profile);

route.get('/', usersController.index);


module.exports = route;
