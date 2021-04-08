const { rejects } = require('assert');
const readline = require('readline');
const emitter = require('../objects/emitter');

function readInput(q, currentEvent) {
    const selected_action = new Promise((resolve, reject) => {
        if (q === undefined) {
            emitter.emit("error", "readInput - missing or invalid parameters!");
            reject();
        }

        const rl = readline.createInterface({
            input: process.stdin
            
        });

        process.stdout.write(q + " ");

        rl.question("", input => {

            // readline trims whitespaces, so we need to temporarily replace them 
            // with another character
            let actions = currentEvent.available_actions;
            let temporaryActions = actions.map(item => item.replace(/\s/g, '_'));
            let temporaryInput = input.replace(/\s/g, '_');

            if (temporaryActions.indexOf(temporaryInput) >= 0) {
                console.log("You decide to", input + ".");
                
                // return paramter: action name
                resolve(input);
            }
            else {
                emitter.emit("error", "readInput - invalid input!");
                reject();
            }
            rl.close();
        });
    });
    return selected_action;
}

module.exports = readInput;