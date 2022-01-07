const Post = require('../models/posts');

class PostsController {

    // [Get] /posts 
    async index(req, res, next) {
        const size = 5;
        const page = Number(req.query.page) || 1;

        const query = req.query;
        const find = Post.find({}, 'user title subject grade \
                                study_form literacy gender fee')
            .limit(size)
            .skip(size * (page - 1));

        if (query.fee) {
            find.find({ fee: { $gte: query.fee } });
            delete query.fee;
        }
        find.find(Object.keys(query)
            .reduce((result, key) => {
                if (query[key]) {
                    result[key] = query[key];
                }
                return result;
            }, {}));

        try {
            const posts = await find.exec();
            res.json(posts);
        }
        catch (err) {
            res.json({ "message": "Not Found" });
        }
    }

    user_post(req, res, next) {
        const user = req.body.user;
        const posts = Post.find({ user }, 'title createdAt');
        res.json(posts);
    }

    // [POST] /posts/new-post
    async new_post(req, res, next) {
        const { user, title, information, subject, grade, fee,
            study_form, gender, literacy, lessons, time, start } = req.body;

        try {
            const post = await Post.create({
                user, title, information, subject, grade, fee,
                study_form, gender, literacy, lessons, time, start
            });

            res.json({ "message": "Success", "id": post._id });
        }
        catch (err) {
            res.status(500).send({
                "error": {
                    "code": 500,
                    "message": "Post creation failed."
                }
            });
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
            res.json(post);
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
        const size = 5;
        const page = Number(req.query.page) || 1;

        const query = req.query;
        const find = Post.find({}, 'user title subject grade \
                                study_form literacy gender fee')
            .limit(size)
            .skip(size * (page - 1));

        if (query.fee) {
            find.find({ fee: { $gte: query.fee } });
            delete query.fee;
        }
        find.find(Object.keys(query)
            .reduce((result, key) => {
                if (query[key]) {
                    result[key] = query[key];
                }
                return result;
            }, {}));

        try {
            const posts = await find.exec();
            res.json(posts);
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

    // [PUT] /posts/edit-post
    async edit_post(req, res, next) {
        const { id, title, information, subject, grade, fee,
            study_form, gender, literacy, lessons, time, start } = req.body;

        try {
            await Post.updateOne({ _id: id }, {
                title, information, subject, grade, fee,
                study_form, gender, literacy, lessons, time, start
            });
            res.json({ "message": "Update Success", "id": id });
        }
        catch (err) {
            res.status(500).send({
                "error": {
                    "code": 500,
                    "message": "Post update failed."
                }
            });
        }
    }

    // [DELETE] /posts/delete
    async delete_post(req, res, next) {
        const id = req.body.id;
        try {
            await Post.deleteOne({ _id: id });
            res.json({ "message": "Delete post successfully." })
        }
        catch (err) {
            res.status(500).send({
                "error": {
                    "code": 500,
                    "message": "Delete post failed."
                }
            });
        }
    }

}

module.exports = new PostsController;
