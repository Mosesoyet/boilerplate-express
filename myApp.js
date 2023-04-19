let express = require("express");
let app = express();
require("dotenv").config()

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
    const envMessage = process.env['MESSAGE_STYLE']
    if (envMessage === "uppercase") {
        res.json({"message": "Hello json".toUpperCase()})
    } else {
        res.json({"message": "Hello json".toLowerCase()})
    }
});




































 module.exports = app;
