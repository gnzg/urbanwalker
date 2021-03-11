require('dotenv').config();
const emitter = require('./emitter');

require("./server.js");
const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 1337;
const app = express();

const World = require('./model/World');

async function start() {
    try {
        await mongoose.connect(
            process.env.API_URI, {
            useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        });
        app.listen(PORT, () => {
            console.log('Server has been started...');
        });
        const world = await World.find({});
        if (world !== null) {
            // Emitter calls
            emitter.emit('logging', 'Found a previously saved world.');
        } else {
            emitter.emit('logging', 'No world generated yet. Generating a new world...');
        }
    } catch (e) {
        console.log('Error:', e);
    }
}

start();