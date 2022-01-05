const Post = require('../models/posts');

class PostsController {

    // [Get] /posts
    async index(req, res, next) {
        const sort = req.query.sort || "5";
        console.log(sort)

        const size = 5;
        const page = Number(req.query.page) || 1;
        try {
            const posts = await Post.find({}, { information: 0 })
                .limit(size)
                .skip(size * (page - 1));
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

    // [POST] /posts/post
    async post(req, res, next) {
        const { user, title, information, subject, grade, fee,
            study_form, gender, literacy, lessons, time } = req.body;

        try {
            const post = await Post.create({
                user, title, information, subject, grade, fee,
                study_form, gender, literacy, lessons, time
            });

            res.status(201).redirect('http://localhost:8000/posts/' + post._id);
        }
        catch (err) {
            res.status(500).send({
                "error": {
                    "code": 500,
                    "message": "Post creation failed."
                }
            });
            return;
        }

    }

    // [PUT] /posts/connect
    async post_new_connect(req, res, next) {
        const { tutor, post } = req.body;
        const new_connect = { tutor: tutor, timec: Date.now() };
        try {
            const connected = await Post.findOne({ _id: post, "connect.tutor": tutor }, { "connect.tutor": 1 });
            if (connected) {
                res.status(409).send({
                    "error": {
                        "code": 409,
                        "message": "Post connection requested."
                    }
                });
                return;
            }
            await Post.updateOne(
                { _id: post },
                { $inc: { connect_count: 1 }, $push: { connect: new_connect } }
            );
            res.status(200).redirect('http://localhost:8000/posts/' + post);
        }
        catch (err) {
            res.status(500).send({
                "error": {
                    "code": 500,
                    "message": "Post connection failed."
                }
            });
        }
    }

    // [DELETE] /posts/connect
    async post_delete_connect(req, res, next) {
        const { tutor, post } = req.body;
        try {
            // const post = await Post.findOne({ _id: post, "connect.tutor": tutor });
            // console.log(post);
            // if (!post) {
            //     res.status(409).send({
            //         "error": {
            //             "code": 409,
            //             "message": "Post connection not required."
            //         }
            //     });
            //     return;
            // }
            await Post.updateOne(
                { _id: post },
                { $inc: { connect_count: -1 }, $pull: { connect: { tutor } } }
            );
            res.status(200).redirect('http://localhost:8000/posts/' + post);
        }
        catch (err) {
            res.status(500).send({
                "error": {
                    "code": 500,
                    "message": "Post delete connection failed."
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
