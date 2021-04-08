const Event = require('../objects/event');

async function displayActions() {
    let latestEvent = await Event.findOne().sort({timestamp : -1});

    actions = latestEvent.available_actions.map(item => "\x1b[33m" + item + "\x1b[0m");
    // save last action
    let lastAction = actions[actions.length-1];
    // modify array to n-1 of original length
    actions.splice(actions.length-1, 1);
    let actionsMinusOne = actions.join(", ");

    console.log("You can", actionsMinusOne, "or", lastAction);

    // revert to original array
    actions = actions.push(lastAction);
}

module.exports = displayActions;