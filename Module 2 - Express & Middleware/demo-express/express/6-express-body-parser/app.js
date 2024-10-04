var express = require('express')
//var bodyParser = require('body-parser')
 
var app = express()
 
app.use(express.json());

// parse application/x-www-form-urlencoded
//app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
//app.use(bodyParser.json())
 
const returnToSender = (req, res, next) => {
    console.log(`middleware`)
    next() // continue ===>
    // res.setHeader('Content-Type', 'text/plain')
    // res.write('you posted:\n')
    // res.end(`rejected from server: ${JSON.stringify(req.body, null, 2)}`)
}

// custom middleware..
app.use(returnToSender)

app.post('/test', (req, res) => {
    console.log(`test request is callled`)

    res.send('OK!!!')
})

app.listen(5003, () => {
    console.log(`running on port 5003`)
})