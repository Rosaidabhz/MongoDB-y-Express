const mongoose = require('mongoose');

const reviewerSchema = mongoose.Schema({
    rev_id: {
        type: Number,
        required: true
    },
    rev_name: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('Reviewer', reviewerSchema);
