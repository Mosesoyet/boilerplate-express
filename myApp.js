let express = require("express");
let app = express();

// server a string
/* 
app.get('/', (req,res) => {
    res.send("Hello Express")
})
*/

// serve a file
app.get('/', (req, res) => {
    let absolutePath = __dirname + '/views/index.html';
    res.sendFile(absolutePath);
})

// Use a static file
app.use((req,res) => {
    let absolutePath = --__dirname + '/public';
    express.static(absolutePath);
})




































 module.exports = app;
