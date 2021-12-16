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
    async search(req, res, next) {
        console.log(req.query);
        const query = req.query;
        const find = Post.find({});
        //find.getFilter();
     
        if (query.less) {
            find.find({ fee : {$lte : query.less}});
            delete query.less;
        }
        if (query.greater) {
            find.find({ fee : {$gte : query.greater}});
            delete query.greater;
        }
        Object.keys(query)
            .reduce((key) => {
                if (query[key]) {
                    find.find({ key : query[key]});
                }
            });
        // const conditions = Object.keys(query)
        //     .reduce((result, key) => {
        //         if (query[key]) {
        //             result[key] = query[key];
        //         }
        //         return result;
        //     }, {});
        // find.find(conditions);
        // find.getFilter();
        
        const posts = await find.exec();
        if (posts) {
            res.status(200).json(posts);
        }
        else {
            res.status(404).send({
                "error": {
                    "errors": [
                    {
                    "domain": "global",
                    "reason": "notFound",
                    "message": "Not Found"
                    }
                    ],
                "code": 404,
                "message": "Not Found"
                }
            });
        }
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
