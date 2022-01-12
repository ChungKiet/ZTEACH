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
                "msg": 3, 'user': null
                // "error": { "code": 409, "message": "Username already exists" }
            });
        }
        try {
            const user = await User.create({ name, gender, birthday, email, username, password });
            res.send({ "msg": 1, 'user': user });
        }
        catch (err) {
            res.status(401).send({
                "msg": 0, 'user': null
                // "error": { "code": 401, "message": "Registration failed." }
            });
        }
    }

    // [POST] /users/login
    async login(req, res, next) {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        if (!user) {
            res.send({
                "isLogin": 2, "user": null
                // "error": { "code": 404, "message": "Usernam not found" }
            });
        }
        else if (user.password === password) {
            // const { name, gender, gender_secure, email, email_secure,
            //      birthday, birthday_secure, address, address_secure,
            //      contact,contact_secure, introduce, createdAt } = user;
            res.send({
                "isLogin": 1, "user": user
            });
        }
        else {
            res.send({
                "isLogin": 3, "user": null
                // "error": { "code": 401, "message": "Wrong password" }
            });
        }
    }

    // [POST] /users/profile
    async user_profile(req, res, next) {
        const username = req.body.username;
        const user = await User.findOne({
            username: username,
            user_type: "student"
        }, '-classes -subjects -certificate');
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
        const { username, name, gender, gender_secure, email, email_secure,
            birthday, birthday_secure, address, address_secure,
            contact, contact_secure, introduce } = req.body;
        try {
            const user = await User.updateOne({ username: username, user_type: "student" }, {
                name, gender, gender_secure, email, email_secure,
                birthday, birthday_secure, address, address_secure,
                contact, contact_secure, introduce
            });
            if (user.modifiedCount === 1) {
                res.json({ "message": "Profile update Success" });
            }
            else {
                res.json({ "message": "Profile update Failed" });
            }
        }
        catch (err) {
            res.status(500).send({
                "error": {
                    "code": 500,
                    "message": "Server inernal error. Profile update failed."
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
        const username = req.body.username;
        const user = await User.findOne({ username }, 'image username name');
        res.json(user);
    }

    // [PUT] /users/edit-image
    async edit_image(req, res, next) {
        const { username, image } = req.body;
        try {
            await User.updateOne({ username }, { image });
            res.json({ "message": "Update success." });
        }
        catch (err) {
            res.status(500).send({
                "error": {
                    "code": 500,
                    "message": "Image update failed."
                }
            });
        }
    }

    // [PUT] /users/delete-image
    async delete_image(req, res, next) {
        const username = req.body.username;
        try {
            await User.updateOne({ username },
                {
                    image: 'https://firebasestorage.googleapis.com/v0/b/zteach-images.appspot.com/o/images%2Fprofile.png?alt=media&token=34e94b8d-cda6-4df8-8f4b-88a022d3b3fe'
                });
            res.json({ "message": "Delete success." });
        }
        catch (err) {
            res.status(500).send({
                "error": {
                    "code": 500,
                    "message": "Image delete failed."
                }
            });
        }
    }
}

module.exports = new UsersController;
