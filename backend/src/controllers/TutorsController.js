const Tutor = require('../models/users');

class TutorsController {

    // [Get] /tutors
    async index(req, res, next) {
        const size = 5;
        const page = Number(req.query.page) || 1;

        const query = req.query;
        const find = Tutor.find({ user_type: "tutor" }, 'username name birthday \
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
        const { id, major, literacy, fee, subjects, classes } = req.body;
        try {
            await Tutor.updateOne({ _id: id, user_type: "student" }, {
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
            const id = req.body.id;
            const tutor = await Tutor.findOne({ _id: id, user_type: "tutor" });
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

    async edit_profile(req, res, next) {
        const { id, name, gender, email, email_secure, birthday,
            address, address_secure, contact, contact_secure,
            introduce, major, literacy, fee, subjects, classes } = req.body;
        try {
            await Tutor.updateOne({ _id: id, user_type: "tutor" }, {
                name, gender, email, email_secure, birthday,
                address, address_secure, contact, contact_secure,
                introduce, major, literacy, fee, subjects, classes
            });
            res.json({ "message": "Tutor's profile update Success" });
        }
        catch (err) {
            res.status(500).send({
                "error": {
                    "code": 500,
                    "message": "Profile update failed."
                }
            });
        }
    }

    // [DELETE] /users/delete
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

}

module.exports = new TutorsController;
