const express = require('express');
const app = express();

app.get('/user/:id', (req, res) => {
  const id = req.params.id;

  if (!/^\d+$/.test(id)) {
    return res.send('Invalid ID ❌');
  }

  res.send(`User ID: ${id}`);
});


app.listen(3000, () => {
  console.log(`Server running at http://localhost:3000`);
});