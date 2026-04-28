const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');
const path = require('path');

// Middleware
app.use(express.urlencoded({ extended: true }));

// View engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
app.use('/', userRoutes);

// Server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});