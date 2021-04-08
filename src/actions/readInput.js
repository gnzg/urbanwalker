const readline = require('readline');
const displayActions = require('./displayActions');
const performAction = require('./performAction');
const Emitter = require('../objects/emitter');

// TODO: is the question really needed?
function readInput(q) {

    if (q === undefined) {
        Emitter.emit("error", "readInput - missing or invalid parameters!");
    }

    const rl = readline.createInterface({
        input: process.stdin
    });
    
    // display available actions
    displayActions();
    process.stdout.write(q + " ");
    
    rl.question("", input => {
        performAction(input)
        .then(
            // success
            () => { 
                rl.close();
             },
             // error
             (error) => { 
                //console.log('error', error);
                readInput(input);
             }
        );
    });
}

module.exports = readInput;