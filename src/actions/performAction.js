var sleep = require('./sleep');
var lookAround = require('./lookAround');

const performAction = action => {
    if (action === "sleep") {
        sleep();
    } else if (action === "look_around" || action === "search_for_items"){
        lookAround();
    }
    // TODO: generate a new event... (generateEvent)
    console.log("You decide to", action.replace(/_/g, ' ') + ".");
};

module.exports = performAction;