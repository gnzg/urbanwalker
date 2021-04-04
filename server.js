require('dotenv').config();
var http = require('http');

function onRequest(request, response) {
    try {
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.write('Hello Urbanwalker!');
        response.end();
    } catch (e) {
        console.log('Error:', e);
    }
}

http.createServer(onRequest).listen(process.env.PORT, '0.0.0.0');
