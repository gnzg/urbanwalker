// global mechanics
const emitter = require('./emitter');
const readInput = require('./readInput');
const diceRoll = require('./diceRoll');

// game 
const World = require('./model/World');
const generateEvent = require('./world/events');
const displayActions = require('./world/displayActions');

async function initWorld() {

    let world = await World.find({});

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
                reject(new Error("Error generating world!"));
            } else {
                console.log("Generating a new world...");
                console.log("Welcome to", world.name + ", a place with a total of", world.total_critters, "living beings.");
            }
        });
    }

    generateEvent();
    displayActions(["Look around", "Sleep", "Search for items"]);
    readInput("What will you do?");
}

module.exports = initWorld;