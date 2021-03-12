var events = require('events');

var emitter = new events.EventEmitter();

// Emitter events
emitter.on('logging', data => {
    console.log('EVENT:', data);
});

emitter.on('action', data => {
    console.log('ACTION:', data);
});

emitter.on('error', data => {
    console.log('ERROR:', data);
});

module.exports = emitter;