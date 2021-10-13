exports.index = (req, res) => {
    res.render('./connection/connections');
};

exports.new = (req, res) => {
    res.send('send new form');
};

exports.create = (req, res) => {
    res.send('Created a new connection');
};

exports.show = (req, res) => {
    res.send('send story with id ' + req.params.id);
};

exports.edit = (req, res) => {
    res.send('send edit form');
};

exports.update = (req, res) => {
    res.send('update story with id ' + req.params.id);
};

exports.delete = (req, res) => {
    res.send('delete story with id ' + req.params.id);
};