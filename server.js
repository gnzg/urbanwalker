require('dotenv').config();
var http = require('http');
var path = require('path');

path.resolve(process.cwd(), '.env');

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
