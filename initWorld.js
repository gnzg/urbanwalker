// global mechanics
const emitter = require('./emitter');
const diceRoll = require('./diceRoll');

// game-related modules
const World = require('./model/World');
const generateEvent = require('./world/generateEvent');

async function initWorld() {

    let world = await World.find({});

    // generate new world, or load previously saved world
    if (world.length > 0) { 
        emitter.emit('logging', 'Found a previously saved world.');
        let existingWorld = world[0];
        console.log("Welcome to", existingWorld.name + ", a place with a total of", existingWorld.total_critters, "living beings.");
        
    } else {
        emitter.emit('logging', 'No world generated yet.');
        
        world = new World({
            name: "City 2021",
            time: "Midday",
            total_critters: diceRoll(1000, 500)
        });

        world.save()
        .then((resolve, reject) => {
            if (reject) {
                reject(new Error("Error generating world! Check DB connection."));
            } else {
                console.log("Generating a new world...");
                console.log("Welcome to", world.name + ", a place with a total of", world.total_critters, "living beings.");
            }
        });
    }

    generateEvent();
}

module.exports = initWorld;