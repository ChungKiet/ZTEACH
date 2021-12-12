const User = require('../models/users');

class UsersController {
    
    // [Get] /users
    index(req, res, next) {
        //res.send('');
        User.find({})
        .then(users => res.json(users))
        .catch(next);
    }

    // [Get] /users/user_name
    user_profile(req, res, next) {
        User.findOne({ user_name : req.params.slug })
        .then(user => res.json(user))
        .catch(next);
    }

    // [Get] /users/search?<field>=<value>
    // search(req, res, next) {
    //     // console.log(req.query);
    //     // res.send('')
    //     User.find({ 
    //         $or: [ 
    //             { xxx },
    //             { xxx } 
    //         ]
    //     })
    //     .then(users => res.json(users))
    //     .catch(next);
    // }
    
}

module.exports = new UsersController;
