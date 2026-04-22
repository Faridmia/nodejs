const express = require('express');
const app = express();

const usersRoute = require('./routes/users.route');

app.use("/api/users", usersRoute);

app.get('/', (req, res) => {
    res.statusCode = 200;
    res.sendFile(__dirname + '/views/index.html');
});

// app.use((req, res) => {
//     res.send('404 Not Found');
//     res.end();
// });

app.use("/register",( req, res) => {
    // res.status(200).json({
    //     message: "User registered successfully",
    //     statusCode: 200,
    // });

    res.statusCode = 200;
    res.sendFile(__dirname + '/views/register.html');


    //res.redirect('/login');
});

app.use("/login",( req, res) => { 
   res.cookie('name', 'faridmia');
  
   res.cookie('token', '1234567890', {
    httpOnly: true,
    secure: true,
    sameSite: 'Strict',
   });

   res.append('Set-Cookie', 'isLoggedIn=true; HttpOnly; Secure; SameSite=Strict');

   res.end();
});

module.exports = app;