const express = require('express');
const route = express.Router();

const imageController = require('../controllers/ImageController');

route.get('/', imageController.index);

route.post('/upload', imageController.upload);

route.post('/get-profile-img', imageController.get_profile_img);

module.exports = route
