const http = require('http');
const Post = require('../models/posts');

class PostsController {
    
    // [Get] /posts
    index(req, res, next) {
        //res.send('');
        Post.find({})
        .then(posts => res.json(posts))
        .catch(next);
    }

    // [Get] /posts/search?<field>=<value>
    search(req, res, next) {
        // console.log(req.query);
        // res.send('')
        Post.find({ 
            $or: [ 
                { mon_hoc : req.query.mon_hoc },
                { lop : req.query.lop } 
            ]
        })
        .then(posts => res.json(posts))
        .catch(next);
    }
    
    // [Get] /posts/sort (by Lương)
    sort(req, res, next) {
        //res.send('<h1>Posts Page!!!</h1>');
        Post.find({})
        .sort({ luong : 1 })
        .then(posts => res.json(posts))
        .catch(next);
    }
}

module.exports = new PostsController;
