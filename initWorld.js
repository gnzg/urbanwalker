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
        emitter.emit('logging', 'Found a previously saved world.');
        let existingWorld = world;
        console.log("Welcome to", existingWorld.name + ", a place with a total of", existingWorld.total_critters, "living beings.");
    
    } 
    // otherwise, generate a new world
    else {
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

    // attempt to load the world entity from db
    // and generate a new world event
    World.findOne()
    .then((resolve, reject) => {
        generateEvent();
    });
}

module.exports = initWorld;