const { Schema, model } = require('mongoose');

const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    time_of_day: {
        type: Number,
        required: true
    },
    is_generated: {
        type: Boolean,
        required: true
    },
    total_critters: {
        type: Number,
        required: true
    }
},
{
    collection: 'world'
});

module.exports = model('World', schema);