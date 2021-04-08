const Event = require('../objects/event');

async function lookAround() {

    // retrieve info about latest event from db
     let latestEvent;
     try { 
         latestEvent = await Event.findOne().sort({timestamp : -1});
     }
     catch(e) {
         Emitter.emit("error", "Failed to establish latest event!");
     }

    let items = latestEvent.nearby_items.map(item => "\x1b[35m" + item + "\x1b[0m");
    // save last action
    let lastItem = items[items.length-1];
    // modify array to n-1 of original length
    items.splice(items.length-1, 1);
    let itemsMinusOne = items.join(", ");

    console.log("You look around and find a", itemsMinusOne, "and a", lastItem + '.');
}

module.exports = lookAround;