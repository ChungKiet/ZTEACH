const express = require('express');
const route = express.Router();

const postsController = require('../controllers/PostsController');

// http://localhost:8000/posts/new-post
route.post('/new-post', postsController.new_post);

// http://localhost:8000/posts/edit
route.put('/edit', postsController.edit_post);

// http://localhost:8000/posts/delete
route.delete('/delete', postsController.delete_post);

// http://localhost:8000/posts/connect?_method=PUT
route.put('/connect', postsController.post_new_connect);

// http://localhost:8000/posts/connect?_method=DELEYE
route.delete('/connect', postsController.post_delete_connect);

// http://localhost:8000/posts/search?<fieds>=<values>
route.get('/search', postsController.search);

// http://localhost:8000/posts
route.post('/user-post', postsController.user_post);

// http://localhost:8000/posts/<post.id>
route.get('/:id', postsController.post_detail);

// http://localhost:8000/posts
route.get('/', postsController.index);


module.exports = route;
