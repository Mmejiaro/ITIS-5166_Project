const Connection = require('../models/connection');

exports.isGuest = (req, res, next) => {
    if (!req.session.user) {
        return next();
    }
    else {
        req.flash('error', 'You are already logged in');
        return res.redirect('/users/profile');
    }
};

exports.isLoggedIn = (req, res, next) => {
    if (req.session.user) {
        return next();
    }
    else {
        req.flash('error', 'Please log in first');
        return res.redirect('/users/login');
    }
};

exports.isHost = (req, res, next) => {
    let id = req.params.id;
    Connection.findById(id).
    then(connection => {
        if(connection){
            if(connection.hostName == req.session.user){
                return next();
            }
            else {
                let err = new Error('Unauthorized to access the resource');
                err.status = 401;
                return next(err);
            }
        }
    })
    .catch(err => next(err));
};