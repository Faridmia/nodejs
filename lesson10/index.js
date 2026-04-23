const express = require('express');
const app = express();
const port = 3001;
const bodyParser = require('body-parser');

// app.get('/user', (req, res) => {
//     const name = req.query.name || 'Guest';
//     const age = req.query.age || 'Unknown';

//     res.send(`Hello, ${name}! Your age is ${age}.`);
// });

// app.listen( port, () => {
//     console.log('Server is running on port http://localhost:3001');
// });


// app.get('/user/:id', (req, res) => {

//     const userId = req.params.id;

//     res.send(`User ID is: ${userId}`);
// });

// app.get('/product/:id/:name', (req, res) => {

//     const id = req.params.id;
//     const name = req.params.name;

//     res.send(`Product ID: ${id}, Name: ${name}`);
// });

// app.get('/order/:orderId', (req, res) => {
//     const orderId = req.params.orderId;

//     res.send(`Fetching order ${orderId}`);
// });

// app.get('/profile', (req, res) => {

//     const userAgent = req.headers['user-agent'];
//     const token = req.headers['authorization'];

//     res.send(`User Agent: ${userAgent}, Token: ${token}`);
// });

// app.get('/custom', (req, res) => {

//     const myHeader = req.headers['x-my-name'];

//     res.send(`Custom Header: ${myHeader}`);
// });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.post('/user', (req, res) => {
    console.log(req.body); 

    res.send(`Name: ${req.body.name}, Age: ${req.body.age}`);
});

app.listen(3001, () => {
    console.log('Server running on http://localhost:3001');
});