const express = require('express');
const route = express.Router();

const homeController = require('../controllers/HomeController');

route.get('/register', homeController.register);

route.get('/login', homeController.login);

route.get('/edit', homeController.edit);

route.get('/new-post', homeController.new_post);

route.get('/post-new-connect', homeController.post_new_connect);

route.get('/post-delete-connect', homeController.post_delete_connect);

route.get('/:slug', homeController.not_found);

route.get('/', homeController.index);

module.exports = route
