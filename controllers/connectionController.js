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
    connection.save()
    .then((connection) => {
        // console.log(connection);
        res.redirect('/connections');
    })
    .catch(err => {
        if(err.name === 'ValidationError') {
            err.status = 400;
        }
        next(err);
    });
};

exports.show = (req, res, next) => {
    let id = req.params.id;
    let connection = model.findById(id);
    if(connection) {
        res.render('./connection/connection', {connection});
    }
    else {
        let err = new Error('Cannot find a connection with id ' + id);
        err.status = 404;
        next(err);
    }
};

exports.edit = (req, res, next) => {
    let id = req.params.id;
    let connection = model.findById(id);
    if(connection) {
        res.render('./connection/edit', {connection});
    }
    else {
        let err = new Error('Cannot find a connection with id ' + id);
        err.status = 404;
        next(err);
    }
};

exports.update = (req, res, next) => {
    let connection = req.body;
    let id = req.params.id;
    if (model.updateById(id, connection)) {
        res.redirect('/connections/' + id);
    }
    else {
        let err = new Error('Cannot find a connection with id ' + id);
        err.status = 404;
        next(err);
    }
};

exports.delete = (req, res, next) => {
    let id = req.params.id;
    if(model.deleteById(id)){
        res.redirect('/connections');
    }
    else {
        let err = new Error('Cannot find a connection with id ' + id);
        err.status = 404;
        next(err);
    }
};