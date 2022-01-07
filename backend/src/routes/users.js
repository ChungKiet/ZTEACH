const express = require('express');
const route = express.Router();

const usersController = require('../controllers/UserController');

// http://localhost:8000/users/register
route.post('/register', usersController.register);

// http://localhost:8000/users/login
route.post('/login', usersController.login);

// http://localhost:8000/users/edit
route.put('/edit', usersController.edit_profile);

// http://localhost:8000/users/register-tutor
route.delete('/delete', usersController.delete_user);

// http://localhost:8000/users/profile
route.post('/profile', usersController.user_profile);

// http://localhost:8000/users
route.get('/', usersController.index);


module.exports = route;
