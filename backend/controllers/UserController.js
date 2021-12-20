const User = require('../models/users');

class UsersController {

    // [Get] /users
    index(req, res, next) {
        res.redirect('http://localhost:8000');
    }

    // [Get] /users/<user_name>
    async user_profile(req, res, next) {
        try {
            const user = await User.findOne({ user_name: req.params.user_name });
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

    async register(req, res, next) {
        console.log(req.body);
        const { name, gender, email, user_name, password } = req.body;

        const userExists = await User.findOne({ user_name });
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
            const user = await User.create({ name, gender, email, user_name, password });
            res.status(201).redirect('http://localhost:8000/users/' + user.user_name);
        }
        catch (err) {
            res.status(409).send({
                "error": {
                    "code": 401,
                    "message": "Registration failed."
                }
            });
            return;
        }
    }

    async login(req, res, next) {
        console.log(req.body);
        const { user_name, password } = req.body;

        const user = await User.findOne({ user_name });
        if (user && user.password === password) {
            res.status(200).redirect('http://localhost:8000/users/' + user.user_name);
        }
        else {
            res.status(401).send({
                "error": {
                    "code": 401,
                    "message": "Login Fails, wrong username or password"
                }
            });
        }
    }

}

module.exports = new UsersController;
