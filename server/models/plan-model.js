const mongoose = require('mongoose');

const planSchema = new mongoose.Schema({
    plan: {
        type: String,
    },
    price: {
        type: String,
    },
    details: {
        type: String,
    },
})

const Plan = new mongoose.model("plans", planSchema);
module.exports = Plan;