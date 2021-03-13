const readline = require('readline');
const emitter = require('./emitter');

function readInput(question, currentEvent, callback = undefined) {
    if (question === undefined) {
        emitter.emit("error", "readInput - missing or invalid parameters!");
        return false;
    }

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question(question + " ", data => {
        if (currentEvent.available_actions.indexOf(data) > 0) {
            console.log("You decide to", data + ".");
        }
        else {
            console.log("Invalid input!");
        }
        rl.close();
    });

    if (callback !== undefined) {
        callback();
    }
}

module.exports = readInput;