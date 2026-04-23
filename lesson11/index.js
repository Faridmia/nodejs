const express = require('express');
const app = express();
const port = 3002;


app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.post('/submit', (req, res) => {
    const { name, email } = req.body;
    console.log(req.body);
    res.send(`
        <h2>Form Submitted Successfully ✅</h2>
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
    `);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});