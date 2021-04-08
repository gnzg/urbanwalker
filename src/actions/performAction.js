var sleep = require('./sleep');
var lookAround = require('./lookAround');

const performAction = action => {
    if (action === "sleep") {
        sleep();
    }
    // TODO: now a new event... (generateEvent)
    console.log("You decide to", action + ".");
};

module.exports = performAction;