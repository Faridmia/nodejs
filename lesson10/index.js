const express = require('express');
const app = express();
const port = 3001;

app.get('/user', (req, res) => {
    const name = req.query.name || 'Guest';
    const age = req.query.age || 'Unknown';

    res.send(`Hello, ${name}! Your age is ${age}.`);
});

app.listen( port, () => {
    console.log('Server is running on port http://localhost:3001');
});