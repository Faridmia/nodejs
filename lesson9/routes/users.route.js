const express = require('express');
const router   = express.Router();


router.get('/register', (req, res) => {
    res.send('this is the registration page!');
    res.end();
});

router.get('/login', (req, res) => {
    res.send('this is the login page!');
    res.end();
});

module.exports = router;