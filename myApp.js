let bodyParser = require("body-parser");
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
app.use('/public', express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

// serve a file
app.get('/', (req, res, next) => {
    let absolutePath = __dirname + '/views/index.html';
    res.sendFile(absolutePath);
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

app.get('/now', (req, res, next) => {
    console.log(`${req.method} ${req.path} - ${req.ip}`)
    req.time = new Date().toString()
    next()
}, (req, res) => {
    res.json({time: req.time})
});

app.get('/:word/echo', (req, res, next) => {
    req.word = req.params.word;
    next();
}, (req, res) => {
    res.json({
        "echo": req.params.word
    });
})

app.route('/name').post((req, res, next) => {
    req.first = req.body.first;
    req.last = req.body.last;
    next()
}, (req, res) => {
    res.json({
        "name": `${req.body.first} ${req.body.last}`
    })
}).get((req, res, next) => {
    req.first = req.query.first;
    req.last = req.query.last;
    next()
}, (req,res) => {
    res.json({ "name": `${req.query.first} ${req.query.last}` })
})




































 module.exports = app;
