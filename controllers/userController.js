const User = require('../models/user');
const Connection = require('../models/connection');

exports.new = (req, res, next) => {
    res.render('./user/new');
}

exports.create = (req, res, next) => {
    let user = new User(req.body);
    user.save()
    .then(() => res.redirect('/users/login'))
    .catch(err => {
        if(err.name === 'ValidationError'){
            req.flash('error', err.message);
            return res.redirect('/users/new');
        }
        if(err.code === 11000) {
            req.flash('error', 'This email address is already being used');
            return res.redirect('/users/new');
        }
        next(err);
    })
}

exports.loginForm = (req, res) => {
    res.render('./user/login');
}

exports.login = (req, res, next) => {
    let email = req.body.email;
    let password = req.body.password;

    User.findOne({email: email})
    .then(user => {
        if(user) {
            user.comparePassword(password)
            .then(result => {
                if(result) {
                    req.session.user = user._id;
                    req.flash('success', 'You are now successfully logged in');
                    return res.redirect('/users/profile');
                }
                else {
                    req.flash('error','Incorrect password! Please Try Again');
                    return res.redirect('/users/login');
                }
            })
        }
        else {
            req.flash('error','Incorrect email address! Please Try Again');
            return res.redirect('/users/login');
        }
    })
    .catch(err => next(err));
}

exports.profile = (req, res, next) => {
    let id = req.session.user;
    Promise.all([User.findById(id), Connection.find({hostName: id})])
    .then(results => {
        const [user, connections] = results;
        res.render('./user/profile', {user, connections});
    })
    .catch(err => next(err))
}

exports.logoff = (req, res, next) => {
    req.session.destroy(err => {
        if(err){
            return next(err);
        }
        else {
            res.redirect('/');
        }
    });
}