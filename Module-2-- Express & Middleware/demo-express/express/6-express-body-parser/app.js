var express = require('express');
var app = express();

// Built-in middleware for parsing JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const returnToSender = (req, res, next) => {
    console.log('middleware');
    next(); // continue to next middleware or route handler
};

// Custom middleware
app.use(returnToSender);

app.post('/test', (req, res) => {
    console.log('test request is called');
    console.log(req.body);
    res.send('OK!!!');
});

app.listen(5003, () => {
    console.log('running on port 5003');
});


//var bodyParser = require('body-parser')
 
// parse application/x-www-form-urlencoded
//app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
//app.use(bodyParser.json())
 
