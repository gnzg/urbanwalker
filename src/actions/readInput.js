const { rejects } = require('assert');
const readline = require('readline');
const displayActions = require('./displayActions');
const performAction = require('./performAction');
const emitter = require('../objects/emitter');
const Event = require('../objects/event');

// TODO: is the question really needed?
async function readInput(q) {

    if (q === undefined) {
        emitter.emit("error", "readInput - missing or invalid parameters!");
        //reject();
    }

    // retrieve info about latest event from db
    let latestEvent = await Event.findOne().sort({timestamp : -1});
    
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
        let temporaryActions = actions.map(item => item.replace(/\s/g, '_').toLowerCase());
        let temporaryInput = input.replace(/\s/g, '_').toLowerCase();

        if (temporaryActions.indexOf(temporaryInput) >= 0) {
            performAction(temporaryInput);
        }
        else {
            emitter.emit("error", "Failed to perform selected action!");
            readInput("What will you do?");
        }

        rl.close();
    });
}

module.exports = readInput;