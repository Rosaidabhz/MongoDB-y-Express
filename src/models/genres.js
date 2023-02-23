const mongoose = require('mongoose');

const genresSchema = mongoose.Schema({
    gen_id: {
        type: Number,
        required: true,
    },
    gen_title: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('Genres', genresSchema);