const Event = require('../objects/event');
const Emitter = require('../objects/emitter');
const sleep = require('./sleep');
const lookAround = require('./lookAround');
const readInput = require('./readInput');

async function performAction (action)  {

    // retrieve info about latest event from db
    let latestEvent;
    try { 
        latestEvent = await Event.findOne().sort({timestamp : -1});
    }
    catch(e) {
        Emitter.emit("error", "Failed to establish latest event!");
    }
    
    // readline trims whitespaces, so we need to temporarily replace them 
    // with another character
    let actions = latestEvent.available_actions;
    let temporaryActions = actions.map(item => item.replace(/\s/g, '_').toLowerCase());
    action = action.replace(/\s/g, '_').toLowerCase();

    if (temporaryActions.indexOf(action) < 0) {
        Emitter.emit("error", "Failed to perform selected action!");
        throw new Error(400);
    }
    
    if (action === "sleep") {
        sleep();
    } else if (action === "look_around" || action === "search_for_items"){
        lookAround();
    }
    // TODO: generate a new event... (generateEvent)
    console.log("You decide to", action.replace(/_/g, ' ') + ".");
}

module.exports = performAction;