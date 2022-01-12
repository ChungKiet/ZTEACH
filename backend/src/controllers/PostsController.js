const Post = require('../models/posts');

class PostsController {

    // [Get] /posts 
    async index(req, res, next) {
        const page = Number(req.query.page) || 1;
        const from = (page - 1) * 10;
        const to = page * 10;

        const query = req.query;
        const find = Post.find({}, 'image username title subject grade \
                                study_form literacy gender fee');

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

        const posts = await find.exec();
        res.json({ 'number': posts.length, 'posts': posts.slice(from, to) });
    }

    // [POST] /posts/user-post
    async user_post(req, res, next) {
        const username = req.body.username;
        const posts = await Post.find({ username }, 'title createdAt');
        res.json(posts);
    }

    // [POST] /posts/new-post
    async new_post(req, res, next) {
        const { image, username, title, information, subject, grade, fee,
            study_form, gender, literacy, lessons, time, start } = req.body;
        try {
            const post = await Post.create({
                image, username, title, information, subject, grade, fee,
                study_form, gender, literacy, lessons, time, start
            });
            if (post) {
                res.json({ "message": "Create post Success", "id": post._id });
            }
            else {
                res.json({ "message": "Create post Failed", "id": null });
            }
        }
        catch (err) {
            res.status(500).send({
                "error": {
                    "code": 500,
                    "message": "Server internal error. Create post Failed."
                }
            });
        }
    }

    // [GET] /posts/<post-id>
    async post_detail(req, res, next) {
        try {
            const _id = req.params.id;
            const post = await Post.findById({ _id });
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
        const find = Post.find({}, 'image username title subject \
                                grade study_form literacy gender fee')
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
            const post = await Post.updateOne({ _id: id }, {
                title, information, subject, grade, fee,
                study_form, gender, literacy, lessons, time, start
            });
            if (post.modifiedCount === 1) {
                res.json({ "message": "Update Success", "id": id });
            }
            else {
                req.json({ "message": "Update Failed", "id": null });
            }
        }
        catch (err) {
            res.status(500).send({
                "error": {
                    "code": 500,
                    "message": "Server internal error. Post update failed."
                }
            });
        }
    }

    // [DELETE] /posts/delete
    async delete_post(req, res, next) {
        const id = req.body.id;
        try {
            await Post.deleteOne({ _id: id });
            res.json({ "message": "Delete post Success." })
        }
        catch (err) {
            res.status(500).send({
                "error": {
                    "code": 500,
                    "message": "Server internal error. Delete post Failed."
                }
            });
        }
    }

}

module.exports = new PostsController;
