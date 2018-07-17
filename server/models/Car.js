const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CarSchema = new Schema({
    make: {type: String, required: true},
    model: {type: String, required: true},
    color: {type: String, required: true},
    year: {type: Number, required: true},
    mileage: {type: Number, required: true},
    location: {type: String, required: true},
    condition: {type: String, required: true},
    VIN: {type: String, required: true},
    status: {type: String, required: true},
    desired_price: {type: String, required: true},
    reserve_price: {type: String, required: true},
    date: {type: Date, default: Date.now}
});

module.exports = Car = mongoose.model('car', CarSchema);