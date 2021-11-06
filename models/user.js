const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: {type: String, required: [true, 'must contain a first name']},
    lastName: {type: String, required: [true, 'must contain a last name']},
    email: {type: String, required: [true, 'must contain an email'], unique: true},
    password: {type: String, required: [true, 'Password must be present']},
});

module.exports = mongoose.model('User', userSchema);