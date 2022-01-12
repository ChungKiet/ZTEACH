const Tutor = require('../models/users');

class TutorsController {

    // [Get] /tutors
    async index(req, res, next) {
        const size = 5;
        const page = Number(req.query.page) || 1;

        const query = req.query;
        const find = Tutor.find({ user_type: "tutor" }, 'image username name birthday \
                                introduce literacy gender subjects classes fee rate')
            .limit(size)
            .skip(size * (page - 1));

        const now = new Date();
        if (query.younger) {
            const bd = new Date(now.getFullYear() - Number(query.younger), 1, 1);
            find.find({ birthday: { $gte: bd } });
            delete query.younger;
        }
        if (query.older) {
            const bd = new Date(now.getFullYear() - Number(query.older), 1, 1);
            find.find({ birthday: { $lte: bd } });
            delete query.older;
        }
        if (query.fee) {
            find.find({ fee: { $lte: query.fee } });
            delete query.fee;
        }
        // if (query.<attribute>) {
        //     find.find({ <attribute>: { $in: query.<attribute> } });
        //     delete query.<attribute>;
        // }
        find.find(Object.keys(query)
            .reduce((result, key) => {
                if (query[key]) {
                    result[key] = { $in: query[key] }; // query[key];
                }
                return result;
            }, {}));

        const tutors = await find.exec();
        res.json(tutors);
    }

    // [PUT] /tutors/register
    async register(req, res, next) {
        const { username, major, literacy, fee, subjects, classes } = req.body;
        try {
            await Tutor.updateOne({ username: username, user_type: "student" }, {
                user_type: "tutor",
                gender_secure: "Công khai", birthday_secure: "Công khai",
                major, literacy, fee, subjects, classes, rate: 5
            });
            res.status(200).json({ "message": "Register Success." })
        }
        catch (err) {
            res.status(500).send({
                "error": {
                    "code": 500,
                    "message": "Register tutor failed."
                }
            });
        }
    }

    // [POST] /tutors/profile
    async profile(req, res, next) {
        try {
            const username = req.body.username;
            const tutor = await Tutor.findOne({ username: username, user_type: "tutor" });
            res.json(tutor);
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

    // [PUT] /tutors/edit
    async edit_profile(req, res, next) {
        const { id, name, gender, email, email_secure, birthday,
            address, address_secure, contact, contact_secure,
            introduce, major, literacy, fee, subjects, classes } = req.body;
        try {
            const tutor = await Tutor.updateOne({ _id: id, user_type: "tutor" }, {
                name, gender, email, email_secure, birthday,
                address, address_secure, contact, contact_secure,
                introduce, major, literacy, fee, subjects, classes
            });
            if (tutor.modifiedCount === 1) {
                res.json({ "message": "Tutor's profile update Success" });
            }
            else {
                res.json({ "message": "Tutor's profile update Failed" });
            }
        }
        catch (err) {
            res.status(500).send({
                "error": {
                    "code": 500,
                    "message": "Server internal error. Profile update failed."
                }
            });
        }
    }

    // [DELETE] /tutors/delete
    async delete_tutor(req, res, next) {
        const id = req.body.id;
        try {
            await Tutor.deleteOne({ _id: id });
            res.json({ "message": "Delete user successfully." })
        }
        catch (err) {
            res.status(500).send({
                "error": {
                    "code": 500,
                    "message": "Delete user failed."
                }
            });
        }
    }

    // [PUT] /tutors/add-certificate
    async add_certificate(req, res, next) {
        const { username, image } = req.body;
        try {
            await Tutor.updateOne({ username }, { $push: { certificate: image } });
            res.json({ "message": "Add certificate successfully." });
        }
        catch (err) {
            res.status(500).send({
                "error": {
                    "code": 500,
                    "message": "Add certificate failed."
                }
            });
        }
    }

    // [PUT] /tutors/remove-certificate
    async remove_certificate(req, res, next) {
        const { username, image } = req.body;
        try {
            await Tutor.updateOne({ username }, { $pull: { certificate: image } });
            res.json({ "message": "Remove certificate successfully." });
        }
        catch (err) {
            res.status(500).send({
                "error": {
                    "code": 500,
                    "message": "Add certificate failed."
                }
            });
        }
    }
}

module.exports = new TutorsController;
