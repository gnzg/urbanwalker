const { Schema, model } = require('mongoose');

const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    timestamp: {
        type: Number,
        require: true
    },
    nearby_items: {
        type: Array
    },
    available_actions: {
        type: Array,
        required: true
    }
},
{
    collection: 'events'
});

module.exports = model('Event', schema);