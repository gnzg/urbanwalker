var http = require('http');
var events = require('events');
var emitter = new events.EventEmitter();
var path = require('path');

path.resolve(process.cwd(), '.env');

require('dotenv').config();

function onRequest(request, response) {
    try {
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.write('Hello world!');
        response.end();
    } catch (e) {
        console.log('Error:', e);
    }
}

http.createServer(onRequest).listen(1337, '0.0.0.0');

emitter.on('logging', data => {
    console.log('Logging', data);
});

emitter.emit('logging', 'Hello');
emitter.emit('logging', process.env.API_URI);
