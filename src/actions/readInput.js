const { rejects } = require('assert');
const readline = require('readline');
const displayActions = require('./displayActions');
const allActions = require('./index');
const emitter = require('../objects/emitter');
const Event = require('../objects/event');

async function readInput(q) {
    // retrieve info about latest event from db
    let latestEvent = await Event.findOne().sort({timestamp : -1});
    const selected_action = new Promise((resolve, reject) => {
        if (q === undefined) {
            emitter.emit("error", "readInput - missing or invalid parameters!");
            reject();
        }

        const rl = readline.createInterface({
            input: process.stdin
            
        });
        // display available actions
        displayActions(latestEvent.available_actions);
        process.stdout.write(q + " ");
        

        rl.question("", input => {

            // readline trims whitespaces, so we need to temporarily replace them 
            // with another character
            let actions = latestEvent.available_actions;
            let temporaryActions = actions.map(item => item.replace(/\s/g, '_'));
            let temporaryInput = input.replace(/\s/g, '_');

            if (temporaryInput === "Sleep") {
                allActions.sleep();
            }
            else {
                emitter.emit("error", "Failed to perform selected action!");
                readInput("What will you do?");
            }

            if (temporaryActions.indexOf(temporaryInput) >= 0) {
                console.log("You decide to", input + ".");
                
                // return paramter: action name
                resolve(input);
            }
            else {
                emitter.emit("error", "readInput - invalid input!");
                //reject();
            }
            rl.close();
        });
    });
    return selected_action;
}

module.exports = readInput;