
var express = require('express');
var app = express();
 
app.get('/', function (request, response) {
    response.send('this would be some HTML');
});

app.post('/', function (req, res) {
    debugger
    console.log('post recieved....');
    res.send('respond to post');    
});

app.delete('/', (req, res) => {
    debugger
    console.log('respond to a delete');
    res.send('delete endpoint received!')
})

app.get('/api', function (req, res) {
    res.json({ firstname: 'John', lastname: 'Smith' });
});

var port = process.env.port || 4003;
app.listen(port, () => console.log(`server is on port 4003`));