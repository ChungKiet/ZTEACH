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
        const user = await User.findOne({ username }, { password: -1 });
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

    // [POST] /users/profile
    async user_profile(req, res, next) {
        const id = req.body.id;
        const user = await User.findOne({ _id: id, user_type: "student" });
        if (user) {
            res.json(user);
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
        const { id, name, gender, gender_secure, email, email_secure,
            birthday, birthday_secure, address, address_secure,
            contact, contact_secure, introduce } = req.body;
        try {
            await User.updateOne({ _id: id, user_type: "student" }, {
                name, gender, gender_secure, email, email_secure,
                birthday, birthday_secure, address, address_secure,
                contact, contact_secure, introduce
            });
            res.json({ "message": "Profile update Success" });
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
    async delete_user(req, res, next) {
        const id = req.body.id;
        try {
            await User.deleteOne({ _id: id });
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

    // [POST] /users/short-prof
    async short_prof(req, res, next) {
        const id = req.body.id;
        const user = await User.findById({ _id: id }, '_id username name');
        req.json(user);
    }
}

module.exports = new UsersController;
