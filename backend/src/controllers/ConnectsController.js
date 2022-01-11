const Connect = require('../models/connects');
const Tutor = require('../models/users');
const Post = require('../models/posts');

class ConnectsController {

    // [POST] /new-post-connect
    async new_post_connect(req, res, next) {
        const { user, tutor, post } = req.body;
        try {
            const connect = await Connect.create({ user, tutor, post });
            if (connect) {
                await Post.updateOne({ _id: post }, { $inc: { request: 1 } });
            }
        }
        catch (err) {
            res.status(401).send({
                "message": "Create connect failed."
                // "error": { "code": 401, "message": "Create connect failed." }
            });
        }
    }

    // [DELETE] /delete-post-connect
    async delete_post_connect(req, res, next) {
        const { user, tutor, post } = req.body;
        try {
            await Connect.deleteOne({ user, tutor, post });
            await Post.updateOne({ _id: post }, { $inc: { request: -1 } });
        }
        catch (err) {
            res.status(401).send({
                "message": "Delete connect failed."
                // "error": { "code": 401, "message": "Delete connect failed." }
            });
        }
    }

    // [POST] /new-tutor-connect
    async new_tutor_connect(req, res, next) {
        const { user, tutor } = req.body;
        try {
            const connect = await Connect.create({ user, tutor });
        }
        catch (err) {
            res.status(401).send({
                "message": "Create connect failed."
                // "error": { "code": 401, "message": "Create connect failed." }
            });
        }
    }

    // [DELETE] /delete-tutor-connect
    async delete_tutor_connect(req, res, next) {
        const { user, tutor } = req.body;
        try {
            await Connect.deleteOne({ user, tutor, post: null });
        }
        catch (err) {
            res.status(401).send({
                "message": "Delete connect failed."
                // "error": { "code": 401, "message": "Delete connect failed." }
            });
        }
    }

    // [POST] /get-post-connect
    async get_post_connect(req, res, next) {
        const post = req.body.post;
        const connects = Connect.find({ post }, 'tutor');
        const tutors = Tutor.find({ _id: { $in: connects } }, 'username name gender literacy timer');
        res.json(tutors);
    }

    // [POST] /get-post-state
    async get_post_state(req, res, next) {
        const { post, tutor } = req.body;
        const connect = await Connect.findOne({ post, tutor });
        if (!connect) {
            res.json({ 'post': post, 'state': 0 });
        }
        else if (connect.accept === false) {
            res.json({ 'post': post, 'state': 1 });
        }
        else {
            res.json({ 'post': post, 'state': 2 });
        }
    }

    // [POST] /get-user-request
    async get_user_request(req, res, next) {
        const tutor = req.body.tutor;
        const connects = Connect.find({ tutor, post: 'null' }, 'user timer');
        res.json(connects);
    }

    // [POST] /get-tutor-state
    async get_tutor_state(req, res, next) {
        const { user, tutor } = req.body;
        const connect = await Connect.findOne({ user, tutor });
        if (!connect) {
            res.json({ 'post': post, 'state': 0 });
        }
        else if (connect.accept === false) {
            res.json({ 'post': post, 'state': 1 });
        }
        else {
            res.json({ 'post': post, 'state': 2 });
        }
    }
}

module.exports = new ConnectsController;
