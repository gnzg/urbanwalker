var http = require('http');
var events = require('events');

var emitter = new events.EventEmitter();

function onRequest(request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Hello world!');
    response.end();
};

http.createServer(onRequest).listen(1337, '0.0.0.0');



emitter.on('logging', data => {
    console.log('Logging', data);
})

emitter.emit('logging', "Hello");