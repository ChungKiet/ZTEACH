const Connect = require('../models/connects');
const Tutor = require('../models/users');
const Post = require('../models/posts');

class ConnectsController {

    // [POST] /new-post-connect --> tạo 1 yêu cầu trong bài đăng
    async new_post_connect(req, res, next) {
        const { user, tutor, post } = req.body;
        try {
            const connect = await Connect.create({ user, tutor, post });
            if (connect) {
                await Post.updateOne({ _id: post }, { $inc: { request: 1 } });
                res.json({ "result": 1, "message": "Request post success." })
            }
            else {
                res.json({ "result": 0, "message": "Request post failed." })
            }
        }
        catch (err) {
            res.status(500).send({
                "result": 0,
                "message": "Server internal error. Request post failed."
                // "error": { "code": 500, "message": "Request post failed." }
            });
        }
    }

    // [DELETE] /delete-post-connect
    async delete_post_connect(req, res, next) {
        const { user, tutor, post } = req.body;
        try {
            await Connect.deleteOne({ user, tutor, post });
            await Post.updateOne({ _id: post }, { $inc: { request: -1 } });
            res.json({ "result": 1, "message": "Delete request post success." })
        }
        catch (err) {
            res.status(500).send({
                "result": 1,
                "message": "Delete request post failed."
                // "error": { "code": 500, "message": "Delete request post failed." }
            });
        }
    }

    // [POST] /new-tutor-connect
    async new_tutor_connect(req, res, next) {
        const { user, tutor } = req.body;
        try {
            const connect = await Connect.create({ user, tutor });
            if (connect) {
                res.json({ "result": 1, "message": "Request tutor success." })
            }
            else {
                res.json({ "result": 0, "message": "Request tutor failed." })
            }
        }
        catch (err) {
            res.status(500).send({
                "result": 0,
                "message": "Request tutor failed."
                // "error": { "code": 500, "message": "Server internal error.Create connect failed." }
            });
        }
    }

    // [DELETE] /delete-tutor-connect
    async delete_tutor_connect(req, res, next) {
        const { user, tutor } = req.body;
        try {
            await Connect.deleteOne({ user, tutor, post: null });
            res.json({
                "result": 1,
                "message": "Delete request tutor success."
            })
        }
        catch (err) {
            res.status(500).send({
                "result": 0,
                "message": "Server internal error. Delete connect failed."
                // "error": { "code": 500, "message": "Delete connect failed." }
            });
        }
    }

    // [POST] /get-post-connect  --> Danh sách yêu cầu của bài đăng
    async get_post_connect(req, res, next) {
        const post = req.body.post;
        const connects = Connect.find({ post }, 'tutor');
        const tutors = Tutor.find({ username: { $in: connects } }, 'username name gender literacy timer');
        res.json(tutors);
    }

    // [POST] /get-post-state  --> trạng thái của bài đăng với 1 gia sư
    async get_post_state(req, res, next) {
        const { post, tutor } = req.body;
        const connected = await Connect.findOne({ post, accept: true });
        if (connected) {
            if (connected.tutor === tutor) {
                res.json({ 'state': 2, 'message': 'Is connected.' }); // Đã kết nỗi với gia sư hiện tại
            }
            else {
                res.json({ 'state': 3, 'message': 'Is connected with another tutor.' }); // Đã kết nỗi với gia sư khác
            }
        }
        const connect = await Connect.findOne({ post, tutor });
        if (!connect) {
            res.json({ 'state': 0, 'message': 'Is not request.' }); // Chưa yêu cầu
        }
        else {
            res.json({ 'state': 1, 'message': 'Is requested.' }); // Đã yêu cầu và chưa được chấp nhận
        }
    }

    // [POST] /get-tutor-connect  --> danh sách gia sư yêu cầu nhưng chưa kết nối
    async get_tutor_connect(req, res, next) {
        const tutor = req.body.tutor;
        const connects = await Connect.find({ tutor: tutor, post: 'null', accept: false }, 'user timer');
        res.json(connects);
    }

    // [POST] /get-tutor-state  --> trạng thái của gia sư với người xem profile của gia sư đó
    async get_tutor_state(req, res, next) {
        const { user, tutor } = req.body;
        const connect = await Connect.findOne({ user, tutor });
        if (!connect) {
            res.json({ 'state': 0, 'message': 'Is not request.' }); // chưa kết nối
        }
        else if (connect.accept === false) {
            res.json({ 'state': 1, 'message': 'Is requested.' }); // đã yêu cầu
        }
        else {
            res.json({ 'state': 2, 'message': 'Is connected.' }); // đã kết nối
        }
    }

    async accept_connect(req, res, next) {
        const { user, tutor } = req.body;
        try {
            const connect = await Connect.updateOne({ user, tutor }, { accept: true });
            if (connect.modifiedCount === 1) {
                res.json({
                    "result": 1,
                    "message": "Accept request success."
                });
            }
            else {
                res.json({
                    "result": 0,
                    "message": "Accept request failed."
                });
            }
        }
        catch (err) {
            res.status(500).send({
                "result": 0,
                "message": "Server internal error. Accept request failed."
                // "error": { "code": 500, "message": "Server internal error.Create connect failed." }
            });
        }
    }

}

module.exports = new ConnectsController;
