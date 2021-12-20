const Post = require('../models/posts');

class PostsController {

    // [Get] /posts
    async index(req, res, next) {
        try {
            const posts = await Post.find({}, { information: 0 });
            res.status(200).json(posts);
        }
        catch (err) {
            res.status(404).send({
                "error": {
                    "code": 404,
                    "message": "Not Found"
                }
            });
        }
    }

    // [Get] /posts/<post_id>
    async post_detail(req, res, next) {
        try {
            const post = await Post.findById(req.params.id);
            res.status(200).json(post);
        }
        catch (err) {
            res.status(404).send({
                "error": {
                    "code": 404,
                    "message": "Not Found"
                }
            });
        }
    }

    // [Get] /posts/search?<field>=<value>
    async search(req, res, next) {
        console.log(req.query);
        const query = req.query;
        const find = Post.find({});
        //find.getFilter();

        if (query.less) {
            find.find({ fee: { $lte: query.less } });
            delete query.less;
        }
        if (query.greater) {
            find.find({ fee: { $gte: query.greater } });
            delete query.greater;
        }
        find.find(Object.keys(query)
            .reduce((result, key) => {
                if (query[key]) {
                    result[key] = query[key];
                }
                return result;
            }, {}));

        const posts = await find.exec();
        if (posts) {
            res.status(200).json(posts);
        }
        else {
            res.status(404).send({
                "error": {
                    "code": 404,
                    "message": "Not Found"
                }
            });
        }
    }

    // [Get] /posts/sort (by fee)
    // sort(req, res, next) {
    //     Post.find({})
    //         .sort({ fee: 1 })
    //         .then(posts => res.json(posts))
    //         .catch(next);
    // }
}

module.exports = new PostsController;
