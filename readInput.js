const readline = require('readline');
const emitter = require('./emitter');

function readInput(message, callback = undefined) {
    if (message === undefined) {
        emitter.emit("error", "readInput - missing or invalid parameters!");
        return false;
    }

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question(message + " ", data => {
        console.log(data);
    });

    if (callback !== undefined) {
        callback();
    }
}

module.exports = readInput;