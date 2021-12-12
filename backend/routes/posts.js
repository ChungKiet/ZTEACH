const express = require('express');
const route = express.Router();

const postsController = require('../controllers/PostsController');

route.get('/search', postsController.search);

route.get('/sort', postsController.sort);

route.get('/', postsController.index);


module.exports = route;
