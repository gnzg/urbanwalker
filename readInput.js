const readline = require('readline');
const emitter = require('./emitter');

function readInput(question, currentEvent, callback = undefined) {
    if (question === undefined) {
        emitter.emit("error", "readInput - missing or invalid parameters!");
        return false;
    }

    const rl = readline.createInterface({
        input: process.stdin
    });

    rl.question(question + " ", input => {
        
        // readline trims whitespaces, so we need to temporarily replace them 
        // with another character
        let actions = currentEvent.available_actions;
        let temporaryActions = actions.map(item => item.replace(/\s/g, '_'));
        let temporaryInput = input.replace(/\s/g, '_');

        if (temporaryActions.indexOf(temporaryInput) >= 0) {
            console.log("You decide to", input + ".");
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