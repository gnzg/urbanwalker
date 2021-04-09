const readline = require('readline');
const displayActions = require('./displayActions');
const performAction = require('./performAction');
const Emitter = require('../objects/emitter');

// TODO: is the question really needed?
async function readInput(q) {
    
    if (q === undefined) {
        Emitter.emit("error", "readInput - missing or invalid parameters!");
    }
    
    const rl = readline.createInterface({
        input: process.stdin
    });
    
    // display available actions
    displayActions();
    process.stdout.write(q + " ");
    let payload;
    
    payload = await rl.question("", input => {
        performAction(input)
        .then(
            // success
            (success) => {
                console.log('success payload:', success);
                rl.close();
            },
            // error
            (error) => {
                console.log('readInput: error', error);
                readInput(input);
            });
    });
}
    
module.exports = readInput;