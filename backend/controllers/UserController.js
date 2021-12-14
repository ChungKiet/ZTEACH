const User = require('../models/users');

class UsersController {
    
    // [Get] /users
    index(req, res, next) {
        res.redirect('http://localhost:8000');
    }

    // [Get] /users/<user_name>
    user_profile(req, res, next) {
        User.findOne({ user_name : req.params.user_name })
        .then(user => res.json(user))
        .catch(next);
    }
    
    async register(req, res, next) {
        console.log(req.query);
        const { name, gender, user_name, password } = req.query;

        const userExists = await User.findOne({ user_name });
        if (userExists) {
            res.status(400).send('<h3>Tên tài khoản đã được sử dụng.</h3>');
            // // throw new Error('User_name already exists.')
        }

        const user = await User.create({
            name,
            gender,
            user_name,
            password
        });

        if (user) {
            res.status(201).redirect('http://localhost:8000/users/' + user.user_name);
        } 
        else {
            res.status(400).send('<h3>Invalid user data.</h3>');
            // throw new Error('Invalid user data.');
        }
    }

    async login(req, res, next) {
        console.log(req.query);
        const { user_name, password } = req.query;

        const user = await User.findOne({ user_name });
        if (user && user.password === password) {
            res.status(201).redirect('http://localhost:8000/users/' + user.user_name);
        }
        else {
            res.status(400).send('<h3>Đăng nhập thất bại.</h3>');
            // throw new Error('Invalid user_name or password');
        }
    }

}

module.exports = new UsersController;
