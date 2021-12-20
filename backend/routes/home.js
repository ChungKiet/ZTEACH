const express = require('express');
const route = express.Router();

const homeController = require('../controllers/HomeController');

route.get('/register', homeController.register);

route.get('/login', homeController.login);

route.get('/:slug', homeController.not_found);

route.get('/', homeController.index);

module.exports = route
