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