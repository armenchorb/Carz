const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// Create Schema

const ContractSchema = new Schema({
    seller_id: {type: String, required: true},
    agent_id: {type: String, required: true},
    car_id: {type: Number, required: true},
    desired_price: {type: String, required: true},
    reserve_price: {type: String, required: true},
    deadline: {type: String, required: true},
    status: [{
        open: {type: String},
        closed: {type: String}
    }],
    date: {type: Date, default: Date.now}
});

module.exports = Contract = mongoose.model('contract', ContractSchema);