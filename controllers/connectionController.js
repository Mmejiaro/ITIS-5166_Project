const model = require('../models/connection');

exports.index = (req, res, next) => {
    model.find()
    .then(connections =>{
        // get categories from database
        let categories = [];
        connections.forEach(connection => {
            if(categories.indexOf(connection.category) === -1){
                categories.push(connection.category);
            }
        });
        res.render('./connection/connections', {categories, connections});
    })
    .catch(err => next(err));
};

exports.new = (req, res) => {
    res.render('./connection/newConnection');
};

exports.create = (req, res, next) => {
    let connection = new model(req.body);
    connection.hostName = req.session.user;
    connection.save()
    .then((connection) => {
        req.flash('success', 'Connection has been created successfully');
        res.redirect('/connections');
    })
    .catch(err => {
        if(err.name === 'ValidationError') {
            err.status = 400;
            req.flash('error', err.message);
            return res.redirect('/back');
        }
        next(err);
    });
};

exports.show = (req, res, next) => {
    let id = req.params.id;

    model.findById(id).populate('hostName', 'firstName lastName')
    .then(connection => {
        if(connection) {
            return res.render('./connection/connection', {connection});
        }
        else {
            let err = new Error('Cannot find a connection with id ' + id);
            err.status = 404;
            next(err);
        }
    })
    .catch(err => next(err));
};

exports.edit = (req, res, next) => {
    let id = req.params.id;

    model.findById(id)
    .then(connection => {
        if(connection) {
            return res.render('./connection/edit', {connection});
        }
        else {
            let err = new Error('Cannot find a connection with id ' + id);
            err.status = 404;
            next(err);
        }
    })
    .catch(err => next(err));
};

exports.update = (req, res, next) => {
    let connection = req.body;
    let id = req.params.id;

    model.findByIdAndUpdate(id, connection, {runValidators: true})
    .then(connection => {
        if(connection) {
            req.flash('success', 'Connection has been updated successfully');
            res.redirect('/connections/' + id);
        }
        else {
            let err = new Error('Cannot find a connection with id ' + id);
            err.status = 404;
            next(err);
        }
    })
    .catch(err => {
        if(err.name === 'ValidationError') {
            err.status = 400;
            return res.redirect('/back');
        }
        next(err);
    });
};

exports.delete = (req, res, next) => {
    let id = req.params.id;

    model.findByIdAndDelete(id)
    .then(connection => {
        if(connection) {
            req.flash('success', 'Connection has been deleted successfully');
            res.redirect('/connections');
        }
        else {
            let err = new Error('Cannot find a connection with id ' + id);
            err.status = 404;
            return next(err);
        }
    })
    .catch(err => next(err));
};