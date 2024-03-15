
// import in express.js - (3rd party npm module)
const express = require('express');
// create an instance of an express app
const app = express();
// config the port the server is to run on
const port = 3000;
// imnport in our custom books module
const books = require('./modules/books');

// add the middleware to your express app..(allow your routes to perform json requests.)
app.use(express.json())

// define a get request.
app.get('/api/books', (req,res) => {
    console.log(`get requests /api/books called`);

    // terminate handshake..with response
    res.send(books) // ==> middleware helps return json data 
})

app.post('/api/books', (req, res) => {
    console.log(`post request received with data ${JSON.stringify(req.body)}`);
    res.send(`post received from server`)
})

app.delete('/api/books', (req, res) => {
    console.log(`delete request received`);
    res.send(`delete received from server`)
})


// set up a event listener, to be trigger when the server starts..
app.listen(port, () => {
    console.log(`server listening on port ${port}`)
})