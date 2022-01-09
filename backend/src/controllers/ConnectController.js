const Connect = require('../models/connects');

class ConnectController {

    async new_post_connect(req, res, next) {
        const { user, tutor, post } = req.body;
        try {
            const connect = await Connect.create({ user, tutor, post });
        }
        catch (err) {
            res.status(401).send({
                "msg": 0
                // "error": { "code": 401, "message": "Registration failed." }
            });
        }
    }

    delete_post_connect(req, res, next) {

    }

    new_tutor_connect(req, res, next) {

    }

    delete_tutor_connect(req, res, next) {

    }
}

module.export = new ConnectController;
