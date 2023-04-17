let express = require("express");
let app = express();
const path = require('path')

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
app.use(express.static(path.join(__dirname, 'public')))





































 module.exports = app;
