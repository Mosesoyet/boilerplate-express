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
    let absolutePath = __dirname + 'views/index.html';
    res.sendFile(absolutePath);
})




































 module.exports = app;
