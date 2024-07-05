const Plan = require("../models/plan-model");

// Read All

const read = async (req, res) => {
    try {
        const planData = await Plan.find({});
        res.send(planData);
    } catch (error) {
        res.status(500).json("internal server errorr");
    }
};

module.exports = { read };    