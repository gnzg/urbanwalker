const World = require('./model/World');
const emitter = require('./emitter');

async function initWorld() {

    let world = await World.find({});

    if (world.length > 0) { // Emitter calls
        emitter.emit('logging', 'Found a previously saved world.');
    } else {
        emitter.emit('logging', 'No world generated yet.');
        world = new World({name: "City 2021", time: "Midday", total_critters: 0});
        world.save().then((resolve, reject) => {
            if (reject) {
                reject(new Error("Error generating world!"));
            } else {
                console.log("Generating a new world...");
            }
        });
    }
}

module.exports = initWorld;