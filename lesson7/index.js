const http = require('http');
const fs = require('fs');
const port = 3000;
const hostname = 'localhost';
const server = http.createServer((req, res) => {
    let filePath = './views/index.html';
    switch (req.url) {
        case '/about':
            filePath = './views/about.html';
            break;
        case '/contact':
            filePath = './views/contact.html';
            break;
        default:
            filePath = './views/index.html';
    }
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end("Page not found");
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        }
    });
});

server.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}/`);
});