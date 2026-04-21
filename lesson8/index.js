const http = require('http');
const fs = require('fs');

const PORT = process.env.PORT || 3000;


const server = http.createServer((req, res) => {
    if( res.url === '/') {
        fs.readFile('./view/index.html', 'utf8', (err, data) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end("Page not found");
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    } else if( res.url === '/register' ) {
        fs.readFile('./view/register.html', 'utf8', (err, data) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end("Page not found");
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end("Page not found");
    }
}); 

server.listen(PORT, () => {
    
});
