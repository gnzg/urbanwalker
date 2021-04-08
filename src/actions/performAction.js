var sleep = require('./sleep');
var lookAround = require('./lookAround');

const performAction = action => {
    if (action === "sleep") {
        sleep();
    }
    // TODO: now a new event... (generateEvent)
};

module.exports = performAction;