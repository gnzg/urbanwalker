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
            
            // clear terminal window
            console.log('\033[2J');
            console.log("URBANWALKER v.0.1 \n#################\n");
        });
       

    } catch (e) {
        console.log('Error:', e);
    }
}

start()
.then(() => {
    initWorld();
});