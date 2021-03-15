// global mechanics
const emitter = require('./emitter');
const diceRoll = require('./diceRoll');

// game-related modules
const World = require('./model/World');
const generateEvent = require('./world/generateEvent');

async function initWorld() {

    // check whether the world entity already exists
    let world = await World.findOne();

    // if it does, load previously saved world
    if (world) { 
        // has the world been previously generated?
        if (world.is_generated) {
            emitter.emit('logging', 'Found a previously saved world.');
        } else {
            console.log("Welcome to", world.name + ", a place with a total of", world.total_critters, "living beings.");
            world.is_generated = true; 
            world.save();
        }
        
        // and generate a new world event
        generateEvent();
    } 
    // otherwise, generate a new world
    else {
        emitter.emit('logging', 'No world generated yet.');
        try {
            world = new World({
                name: "City 2021",
                time_of_day: 12,
                total_critters: diceRoll(1000, 500),
                is_generated: false
            });
            await world.save();
            console.log("Generating a new world...");
            initWorld();
        } catch (err) {
            emitter.emit("error", "Error generating world! Check DB connection.");
        }
    }
}

module.exports = initWorld;