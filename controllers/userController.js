const User = require('../models/user');

exports.new = (req, res, next) => {
    res.render('./user/new');
}

exports.create = (req, res, next) => {
    let user = new User(req.body);
    user.save()
    .then(() => res.redirect('/users/login'))
    .catch(err => {
        if(err.name === 'ValidationError'){
            // req.flash('error', err.message);
            return res.redirect('/users/new');
        }
        if(err.code === 11000) {
            // req.flash('error', 'This email address is already being used');
            return res.redirect('/users/new');
        }
        next(err);
    })
}
