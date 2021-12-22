const User = require('../models/users');

class UsersController {

    // [GET] /users
    index(req, res, next) {
        res.status(403).redirect('http://localhost:8000');
    }

    // [POST] /users/register
    async register(req, res, next) {
        const { name, gender, birth, email, user_name, password } = req.body;
        const userExists = await User.findOne({ user_name }, { user_name: 1 });
        if (userExists) {
            res.status(409).send({
                "error": {
                    "code": 409,
                    "message": "This user_name is already in use. Please select another user_name."
                }
            });
            return;
        }
        try {
            const user = await User.create({ name, gender, birth, email, user_name, password });
            res.status(201).redirect('http://localhost:8000/users/' + user.user_name);
        }
        catch (err) {
            res.status(401).send({
                "error": {
                    "code": 401,
                    "message": "Registration failed."
                }
            });
        }
    }

    // [POST] /users/login
    async login(req, res, next) {
        const { user_name, password } = req.body;
        const user = await User.findOne({ user_name });
        if (user && user.password === password) {
            if (user.user_type === "student") {
                res.status(200).redirect('http://localhost:8000/users/' + user_name);
            }
            else {
                res.status(200).redirect('http://localhost:8000/tutors/' + user_name);
            }
        }
        else {
            res.status(401).send({
                "error": {
                    "code": 401,
                    "message": "Login fails, wrong username or password"
                }
            });
        }
    }

    // [GET] /users/<user_name>
    async user_profile(req, res, next) {
        try {
            const user_name = req.params.user_name;
            const user = await User.findOne({ user_type: "student", user_name },
                { major: 0, literacy: 0, classes: 0, fee: 0 });
            res.status(200).json(user);
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

    // [PUT] /users/edit
    async edit_profile(req, res, next) {
        const user_name = req.body.user_name;
        const user = req.body;
        try {
            await User.updateOne({ user_type: "student", user_name: user_name }, { user });
            res.status(200).redirect('http://localhost:8000/users/' + user_name);
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

    // [GET] /users/register-tutor
    register_tutor(req, res) {
        res.status(200).render("tutor_reg.html");
    }

}

module.exports = new UsersController;
