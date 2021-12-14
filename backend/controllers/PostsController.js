const Post = require('../models/posts');

class PostsController {
    
    // [Get] /posts
    index(req, res, next) {
        Post.find({}, {information : 0})
        .then(posts => res.json(posts))
        .catch(next);
    }

    // [Get] /posts/<post_id>
    post_detail(req, res, next) {
    //  Post.findOne({ id : req.params.id })
        Post.findById(req.params.id)
        .then(post => res.json(post))
        .catch(next);
    }

    // [Get] /posts/search?<field>=<value>
    search(req, res, next) {
        console.log(req.query);
        if (req.query == {}) {
            res.redirect('http://localhost:8000/posts');
            console.log('True');
        }
        Post.find({ 
            $or: [ 
                { subject : req.query.subject },
                { grade : req.query.grade } 
            ]
        })
        .then(posts => res.json(posts))
        .catch(next);
    }
    
    // [Get] /posts/sort (by fee)
    sort(req, res, next) {
        Post.find({})
        .sort({ fee : 1 })
        .then(posts => res.json(posts))
        .catch(next);
    }
}

module.exports = new PostsController;
