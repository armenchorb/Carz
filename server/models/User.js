const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// Create Schema

const UserSchema = new Schema({
    first_name: {type: String, required: true},
    last_name: {type: String, required: true},
    phone: {type: Number, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    cars: [{
        listed: {type: String},
        selling: {type: String}
    }]
});

module.exports = User = mongoose.model('user', UserSchema);