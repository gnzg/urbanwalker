const Event = require('../model/Event');
const displayActions = require('../world/displayActions');
const readInput = require('../readInput');

async function generateEvent() {
    
    // Get current UNIX time
    const timestamp = Math.floor(+new Date() / 1000);

    // Check whether waking up event already took place
    let event_wakingup = await Event.findOne({ name: "waking up"});
    
    if (event_wakingup) {
        event_wakingup = new Event({
            name: "waking up",
            description: "You wake up at the feet of a massive pile of rubble at the center of what used to be a shoping mall. Rays of light illuminate the empty belly of the building through broken glass.",
            timestamp,
            available_actions: ["Look around", "Sleep", "Search for items"],
            nearby_items: ["crowbar", "broken cellphone", "water bottle"]
        });
        await event_wakingup.save();
    }

    console.log(event_wakingup.description);

    displayActions(event_wakingup.available_actions);
    readInput("What will you do?");
}

module.exports = generateEvent;