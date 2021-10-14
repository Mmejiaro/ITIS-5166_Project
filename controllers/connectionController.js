const model = require('../models/connection');

exports.index = (req, res) => {
    let categories = model.categories();
    let connections = model.find();
    res.render('./connection/connections', {categories, connections});
};

exports.new = (req, res) => {
    res.render('./connection/newConnection');
};

exports.create = (req, res) => {
    // res.send('Created a new connection');
    let connection = req.body;
    model.save(connection);
    res.redirect('./connections');
};

exports.show = (req, res) => {
    let id = req.params.id;
    let connection = model.findById(id);
    if(connection) {
        res.render('./connection/connection', {connection});
    }
    else {
        res.status(404).send('Cannot find connection with id ' + id);
    }
};

exports.edit = (req, res) => {
    let id = req.params.id;
    let connection = model.findById(id);
    if(connection) {
        res.render('./connection/edit', {connection});
    }
    else {
        res.status(404).send('Cannot find connection with id ' + id);
    }
};

exports.update = (req, res) => {
    let connection = req.body;
    let id = req.params.id;
    if (model.updateById(id, connection)) {
        res.redirect('/connections/' + id);
    }
    else {
        res.status(404).send('Cannot find connection with id ' + id);
    }
};

exports.delete = (req, res) => {
    res.send('delete story with id ' + req.params.id);
};