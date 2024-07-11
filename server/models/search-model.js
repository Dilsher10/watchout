const mongoose = require('mongoose');

const searchSchema = new mongoose.Schema({
    country: {
        type: String
    },
    alertType: {
        type: String
    },
    gender: {
        type: String
    },
    ethnicity: {
        type: String
    },
    dating: {
        type: String
    },
    dob: {
        type: String
    }
})

const Search = new mongoose.model("posts", searchSchema);
module.exports = Search;