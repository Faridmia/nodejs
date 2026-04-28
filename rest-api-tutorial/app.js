const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const usersRoute = require('./routes/users.route');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/users", usersRoute);
// home route 

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// route not found

app.use((req, res, next ) => {
  res.status(404).json({ message: 'Route not found' });
});

app.use((err,req, res, next ) => {
  res.status(500).json({ message: 'Internal server error' });
});

module.exports = app;