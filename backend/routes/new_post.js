const express = require('express');
const route = express.Router();

const newPostController = require('../controllers/NewPostController');

route.get('/', newPostController.index);

module.exports = route;
