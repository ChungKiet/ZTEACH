const express = require('express');
const route = express.Router();

const tutorsController = require('../controllers/TutorsController');

// route.put('/edit', tutorsController.edit_profile);

// http://localhost:8000/tutors/register
route.put('/register', tutorsController.register);

// http://localhost:8000/tutors/<user_name>
route.get('/:user_name', tutorsController.tutor_profile);

// http://localhost:8000/tutors
route.get('/', tutorsController.index);


module.exports = route;
