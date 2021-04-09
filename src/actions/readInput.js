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
    await displayActions();
    process.stdout.write(q + " ");
    
    let payload;

    rl.question("", input => {
        performAction(input)
        .then(
            // success
            (payload_data) => {
                console.log('success payload:', payload_data);
                payload = payload_data;
                rl.close();
            },
            // error
            (error) => {
                console.log('readInput: error', error);
                readInput(input);
            });
    });
    return new Promise(resolve => {
        if (payload) {
          resolve(payload);
        }
    });
}
    
module.exports = readInput;