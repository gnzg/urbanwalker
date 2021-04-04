require("./server.js");
const express = require("express");
const mongoose = require("mongoose");

const initWorld = require('./initWorld');

const PORT = process.env.PORT || console.error("Error: No port provided!");
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
            
            // clear terminal window
            console.log('\033[2J');
            console.log("\x1b[32m " + "URBANWALKER v.1.0.1", "\x1b[0m" + "\n #################\n");
        });
       

    } catch (e) {
        console.log('Error:', e);
    }
}

start()
.then(() => {
    initWorld();
});