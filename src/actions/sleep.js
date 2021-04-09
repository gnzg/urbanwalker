const World = require('../objects/World');

async function sleep() {
    console.log("You've slept for 8 hours.");

    // Update time in the world
    let world = await World.findOne();

    // show meaningful output of time
    let currentTime = world.time_of_day + 8 > 24 ? (world.time_of_day + 8) % 8 : world.time_of_day + 8;

    world.time_of_day = currentTime;
    await world.save();

    console.log("It is now", world.time_of_day, "O'clock.");
}

module.exports = sleep;