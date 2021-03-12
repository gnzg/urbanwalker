require('dotenv').config();
const emitter = require('./emitter');

require("./server.js");
const express = require("express");
const mongoose = require("mongoose");

const axios = require('axios');

const PORT = process.env.PORT || 1337;
const app = express();

const World = require('./model/World');

async function start() {
    try {
        await mongoose.connect(
            process.env.DB_URI, {
            useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        })
        .then(() => console.log("Database Connected Successfully"))
        .catch(err => console.log(err));

        app.listen(PORT, () => {
            console.log('Server is listening for requests...');
        });


        let world = await World.find({});

        if (world.length > 0) {
            // Emitter calls
            emitter.emit('logging', 'Found a previously saved world.');
        } else {
            emitter.emit('logging', 'No world generated yet.');
            world = new World({name: "City 2021", time: "Midday", total_critters: 0 });
            world.save().then((resolve, reject) => {
                if (reject) {
                    reject(new Error("Error generating world!"));
                } else {
                    console.log("Generating a new world...");
                }
            });
        }
    } catch (e) {
        console.log('Error:', e);
    }
}

start();