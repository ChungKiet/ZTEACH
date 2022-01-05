const User = require('../models/users');

class UsersController {

    // [GET] /users
    index(req, res, next) {
        res.status(403).redirect('http://localhost:8000');
    }

    // [POST] /users/register
    async register(req, res, next) {
        const { name, gender, birthday, email, username, password } = req.body;
        console.log({ name, gender, birthday, email, username, password });

        const userExists = await User.findOne({ username });
        if (userExists) {
            res.send({
                "msg": 3
                // "error": { "code": 409, "message": "Username already exists" }
            });
            return;
        }
        try {
            await User.create({ name, gender, birthday, email, username, password });
            res.send({ "msg": 1 });
        }
        catch (err) {
            res.status(401).send({
                "msg": 0
                // "error": { "code": 401, "message": "Registration failed." }
            });
        }
    }

    // [POST] /users/login
    async login(req, res, next) {
        const { username, password } = req.body;
        console.log({ username, password });

        const user = await User.findOne({ username });
        if (!user) {
            res.send({
                "isLogin": 2,
                "user": null
                // "error": { "code": 404, "message": "Usernam not found" }
            });
        }
        else if (user.password === password) {
            res.send({
                "isLogin": 1,
                "user": user
            });
        }
        else {
            res.send({
                "isLogin": 3,
                "user": null
                // "error": { "code": 401, "message": "Wrong password" }
            });
        }
    }

    // [POST] /users/<user_name>
    async user_profile(req, res, next) {
        const username = req.params.username;
        const user = await User.findOne({ user_type: "student", username: username });
        if (user) {
            res.status(200).json(user);
        }
        else {
            res.status(404).send({
                "error": {
                    "code": 404,
                    "message": " User Not Found"
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
