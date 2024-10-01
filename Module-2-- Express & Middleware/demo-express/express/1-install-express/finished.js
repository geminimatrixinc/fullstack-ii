
var express = require('express');

var app = express();
 
app.get('/', (request, response) => {
    response.send("Welcome to my express website!")
})

app.get('/hello*', (req, res) => {
    res.send('Hello World!')
  })


  function logServerStarted(port) {
    console.log(`server has start on port: ${port}`)
  }
// ** environment variable - production server may have different port
var port = process.env.port || 4002;
app.listen(port, logServerStarted(port));