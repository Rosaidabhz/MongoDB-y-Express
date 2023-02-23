const mongoose = require('mongoose');

const movieGenresSchema = mongoose.Schema({
    gen_id: {
        type: Number,
        required: true
    },
    mov_id: {
        type: Number,
        required: true
    },
})

module.exports = mongoose.model('MovieGenres', movieGenresSchema);
