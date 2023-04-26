let express = require("express");
let app = express();
require('dotenv').config()

// server a string
/* 
app.get('/', (req,res) => {
    res.send("Hello Express")
})
*/

// Use a static file
app.use('/public',express.static(__dirname + '/public'));

// serve a file
app.get('/', (req, res, next) => {
    userPassedConsoleChallenge.log(`${req.method} ${req.path} - ${req.ip}`)
    let absolutePath = __dirname + '/views/index.html';
    res.sendFile(absolutePath);
    next()
})

// serve json
app.get('/json', (req, res, next) => {
    console.log(`${req.method} ${req.path} - ${req.ip}`)
    const mySecrete = process.env['MESSAGE_STYLE']
    if (mySecrete === "uppercase") {
        res.json(
            {"message": "Hello json".toUpperCase()}
            );
    } else {
        res.json(
            {"message": "Hello json"}
            );
    }
    next()
});




































 module.exports = app;
