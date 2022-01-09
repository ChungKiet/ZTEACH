const express = require('express');
const route = express.Router();

const connectController = require('../controllers/ConnectController');

// // http://localhost:8000/connects/new-post-connect
// route.post('/new-post-connect', connectController.new_post_connect);

// // http://localhost:8000/connects/delete-post-connect
// route.delete('/delete-post-connect', connectController.delete_post_connect);

// // http://localhost:8000/connects/new-tutor-connect
// route.post('/new-tutor-connect', connectController.new_tutor_connect);

// // http://localhost:8000/connects/delete-tutor-connect
// route.delete('/delete-tutor-connect', connectController.delete_tutor_connect);

module.exports = route;