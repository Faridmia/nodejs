const express = require('express');
const app = express();

const port = 3005;

const middleware = (req, res, next) => {
  console.log('Middleware executed');
  req.currentTime = new Date( Date.now() + 3600000 ).toISOString(); // Add 1 hour to the current time
  next();
};

 app.use(middleware); 
// app.get('/', middleware,(req, res) => {
//   res.send(`Hello from Node.js server! fdf - Current Time: ${req.currentTime}`);
// });

// app.listen(port, () => {
//   console.log(`Node.js server is running on port http://localhost:${port}`);
// });

app.get('/',(req, res) => {
  res.send(`Hello from Node.js server! fdf - Current Time: ${req.currentTime}`);
});

app.get('/about',(req, res) => {
  res.send(`I am the about page - Current Time: ${req.currentTime}`);
});

app.listen(port, () => {
  console.log(`Node.js server is running on port http://localhost:${port}`);
});