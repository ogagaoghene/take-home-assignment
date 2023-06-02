const http = require('http');
const port = 3000;
const server = http.createServer();

server.on("request", (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    let responseMessage = "<h1>This will show on the screen</h1>";
    res.end(responseMessage);
});


server.listen(port);
console.log(`The server has started and is listening on port: ${port}`);