require("./server.js");
const express = require("express");
const mongoose = require("mongoose");

const initWorld = require('./initWorld');

const PORT = process.env.PORT || 1337;
const app = express();

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

    } catch (e) {
        console.log('Error:', e);
    }
}

start()
.then(() => {
    initWorld();
});