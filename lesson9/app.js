const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, World!');
    res.end();
});

app.post('/', (req, res) => {
    res.send('post request received!');
    res.end();
});

app.put('/', (req, res) => {
    res.send('put request received!');
    res.end();
});

app.delete('/', (req, res) => {
    res.send('delete request received!');
    res.end();
});

module.exports = app;