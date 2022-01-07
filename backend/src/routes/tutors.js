const express = require('express');
const route = express.Router();

const tutorsController = require('../controllers/TutorsController');

// http://localhost:8000/tutors/register
route.put('/register', tutorsController.register);

// http://localhost:8000/tutors/profile
route.post('/:user_name', tutorsController.profile);

// http://localhost:8000/tutors/edit
route.put('/edit', tutorsController.edit_profile);

// http://localhost:8000/tutors/delete
route.post('/:user_name', tutorsController.delete_tutor);

// http://localhost:8000/tutors
route.get('/', tutorsController.index);


module.exports = route;
