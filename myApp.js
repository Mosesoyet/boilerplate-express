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
app.get('/', (req, res) => {
    let absolutePath = __dirname + '/views/index.html';
    res.sendFile(absolutePath);
})

// serve json
app.get('/json', (req, res) => {
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
});

app.get('/middelware', (req, res, next) => {
    console.log(`${req.method} ${req.route} - ${req.ip}`);
    next()
});




































 module.exports = app;
