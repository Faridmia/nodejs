const express = require('express');
const app = express();
const port = 3001;

// form data parse
app.use(express.urlencoded({ extended: true }));

// static file
app.use(express.static('public'));

app.post('/calculate', (req, res) => {
    const { shape, value1, value2 } = req.body;

    let area;

    if (shape === 'rectangle') {
        area = value1 * value2;
    } else if (shape === 'triangle') {
        area = 0.5 * value1 * value2;
    } else if (shape === 'circle') {
        area = Math.PI * value1 * value1;
    }

    res.send(`
        <h2>Result ✅</h2>
        <p>Shape: ${shape}</p>
        <p>Area: ${area}</p>
        <a href="/">Go Back</a>
    `);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});