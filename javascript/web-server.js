const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
    console.log('Receiving an incoming request')
    res.setHeader('Content-Type', 'text/html');
    
    let responseMessage = "<h1>Hello, World!</h1>";
    res.write(responseMessage);
    res.end();
    console.log(`Sent a response: ${responseMessage}`);
});

server.listen(port, () => {
    console.log(`The server has started and is listening on port: ${port}`);
});
