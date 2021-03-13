const World = require('../../model/World');
const emitter = require('../../emitter');

async function sleep(current_time) {
    console.log("You've slept for 8 hours.");

    // Update time in the world
    let world = await World.updateOne({
        time_of_day: current_time + 8
    },
    (err, rawResponse) => {
        emitter.emit("error", "Failed to update world time!", err, "\n" + rawResponse);
    })
    .then(value => {
        console.log('value', value);
        // re-load world entity from db
        console.log("It is now", world.time_of_day);
    });

}

module.exports = sleep;