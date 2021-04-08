const Event = require('../objects/event');

async function lookAround() {
    let latestEvent = await Event.findOne().sort({timestamp : -1});

    let items = latestEvent.nearby_items.map(item => "\x1b[35m" + item + "\x1b[0m");
    // save last action
    let lastItem = items[items.length-1];
    // modify array to n-1 of original length
    items.splice(items.length-1, 1);
    let itemsMinusOne = items.join(", ");

    console.log("You look around and find", itemsMinusOne, "and", lastItem);
}

module.exports = lookAround;