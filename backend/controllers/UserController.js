const User = require('../models/users');

class UsersController {
    
    // [Get] /users
    index(req, res, next) {
        res.redirect('http://localhost:8000');
    }

    // [Get] /users/<user_name>
    async user_profile(req, res, next) {
        const user = await User.findOne({ user_name : req.params.user_name });
        if (user) {
            res.status(200).json(user);
        }
        else {
            res.status(404).send({
                "error": {
                    "errors": [
                    {
                    "domain": "global",
                    "reason": "notFound",
                    "message": "Not Found"
                    }
                    ],
                "code": 404,
                "message": "Not Found"
                }
            });
        }
    }
    
    async register(req, res, next) {
        console.log(req.query);
        const { name, gender, user_name, password } = req.query;

        const userExists = await User.findOne({ user_name });
        if (userExists) {
            res.status(401).send({
                "error": {
                    "errors": [
                    {
                    "domain": "global",
                    "reason": "conflict",
                    "message": "This name is already in use. Please select another name."
                    }
                    ],
                "code": 409,
                "message": "This name is already in use. Please select another name."
                }
            });
        }

        const user = await User.create({
            name,
            gender,
            user_name,
            password
        });
        res.status(201).redirect('http://localhost:8000/users/' + user.user_name);
    }

    async login(req, res, next) {
        console.log(req.query);
        const { user_name, password } = req.query;

        const user = await User.findOne({ user_name });
        if (user && user.password === password) {
            res.status(200).redirect('http://localhost:8000/users/' + user.user_name);
        }
        else {
            res.status(401).send({
                "error": {
                    "errors": [
                    {
                    "domain": "global",
                    "reason": "required",
                    "message": "Login Fails, wrong username or password",
                    "locationType": "header",
                    "location": "Authorization"
                    }
                    ],
                "code": 401,
                "message": "Login Fails, wrong username or password"
                }
            });
            // throw new Error('Invalid user_name or password');
        }
    }

}

module.exports = new UsersController;
