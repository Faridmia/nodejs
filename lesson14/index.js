
const express = require('express');
const app = express();
require('dotenv').config();

const port = process.env.PORT || 3003;
app.get('/', (req, res) => {
  res.send('Hello Farid!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});