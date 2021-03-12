const { toInteger } = require('lodash');
const { Schema, model } = require('mongoose');

const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    time: {
        type: String,
        require: true
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