const express = require('express');
const route = express.Router();

const connectsController = require('../controllers/ConnectsController');

// localhost:8000/connects/new-post-connect
route.post('/new-post-connect', connectsController.new_post_connect);

// http://localhost:8000/connects/delete-post-connect
route.delete('/delete-post-connect', connectsController.delete_post_connect);

// http://localhost:8000/connects/new-tutor-connect
route.post('/new-tutor-connect', connectsController.new_tutor_connect);

// http://localhost:8000/connects/delete-tutor-connect
route.delete('/delete-tutor-connect', connectsController.delete_tutor_connect);

// http://localhost:8000/connects/get-post-connect
route.post('/get-post-connect', connectsController.get_post_connect);

// http://localhost:8000/connects/get-post-accept
route.post('/get-post-accept', connectsController.get_post_accept);

// http://localhost:8000/connects/get-post-state
route.post('/get-post-state', connectsController.get_post_state);

// http://localhost:8000/connects/get-tutor-connect
route.post('/get-tutor-connect', connectsController.get_tutor_connect);

// http://localhost:8000/connects/get-tutor-state
route.post('/get-tutor-state', connectsController.get_tutor_state);

// http://localhost:8000/connects/accept-connect
route.put('/accept-connect', connectsController.accept_connect);

// http://localhost:8000/connects/new-tutor-rate
route.put('/new-tutor-rate', connectsController.new_tutor_rate);

// http://localhost:8000/connects/get-tutor-rate
route.put('/get-tutor-rate', connectsController.get_tutor_rate);

// http://localhost:8000/connects
// route.get('/', connectsController.get_all_connect);

module.exports = route;
