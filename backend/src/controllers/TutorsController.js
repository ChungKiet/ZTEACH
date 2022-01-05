const Tutor = require('../models/users');

class TutorsController {

    // [Get] /tutors
    async index(req, res, next) {
        try {
            const tutors = await Tutor.find({ user_type: "tutor" });
            res.status(200).json(tutors);
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

    // [Get] /tutors/<user_name>
    async tutor_profile(req, res, next) {
        try {
            const user_name = req.params.user_name;
            const tutor = await Tutor.findOne({ user_type: "tutor", user_name });

            res.status(200).json(tutor);
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

    // [PUT] /tutors/register
    async register(req, res, next) {
        console.log(req.body);
        const { user_name, major, literacy, fee, classes } = req.body;

        try {
            await Tutor.updateOne({ user_type: "student", user_name: user_name }, {
                user_type: "tutor",
                major,
                literacy,
                fee,
                classes
            });
            res.status(200).redirect('http://localhost:8000/tutors/' + user_name);
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

    // async login(req, res, next) {
    //     console.log(req.body);
    //     const { user_name, password } = req.body;

    //     const user = await Tutor.findOne({ user_name });
    //     if (user && user.password === password) {
    //         res.status(200).redirect('http://localhost:8000/users/' + user.user_name);
    //     }
    //     else {
    //         res.status(401).send({
    //             "error": {
    //                 "code": 401,
    //                 "message": "Login Fails, wrong username or password"
    //             }
    //         });
    //     }
    // }

    // async edit_profile(req, res, next) {
    //     console.log(req.body);
    //     const { user_name, introduce, name, gender, birth, address, phone, contact } = req.body;

    //     try {
    //         await Tutor.updateOne({ user_name }, {
    //             name,
    //             gender,
    //             birth,
    //             address,
    //             phone,
    //             introduce,
    //             contact
    //         });
    //         res.status(200).redirect('http://localhost:8000/users/' + user_name);
    //     }
    //     catch (err) {
    //         res.status(500).send({
    //             "error": {
    //                 "code": 500,
    //                 "message": "Profile update failed."
    //             }
    //         });
    //     }
    // }

}

module.exports = new TutorsController;
