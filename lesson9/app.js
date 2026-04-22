const express = require('express');
const app = express();

const usersRoute = require('./routes/users.route');

app.use("/api/users", usersRoute);

app.get('/', (req, res) => {
    res.send('Hello, World!');
    res.end();
});

app.use((req, res) => {
    res.send('404 Not Found');
    res.end();
});

module.exports = app;