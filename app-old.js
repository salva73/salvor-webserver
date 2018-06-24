const http = require('http');
let port = 8080;
let server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-type":"application/json"});
    console.log(res.socket);
    res.end("Servidor en marcha");
});

server.listen(port, "127.0.0.1", () => {
    console.log(`Server online on 127.0.0.1:${port}`);
});