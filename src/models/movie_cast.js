const mongoose = require('mongoose');

const movieCastSchema = mongoose.Schema({
    act_id: {
        type: Number,
        required: true
    },
    mov_id: {
        type: Number,
        required: true
    },
    role: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('MovieCast', movieCastSchema);
