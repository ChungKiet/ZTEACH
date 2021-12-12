const User = require('../models/users');

class UsersController {
    
    // [Get] /users
    index(req, res, next) {
        res.redirect('http://localhost:8000');
        // User.find({})
        // .then(users => res.json(users))
        // .catch(next);
    }

    // [Get] /users/user_name
    user_profile(req, res, next) {
        User.findOne({ user_name : req.params.slug })
        .then(user => res.json(user))
        .catch(next);
    }
    
}

module.exports = new UsersController;
