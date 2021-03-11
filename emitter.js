var events = require('events');

var emitter = new events.EventEmitter();

// Emitter events
emitter.on('logging', data => {
    console.log('EVENT:', data);
});

module.exports = emitter;