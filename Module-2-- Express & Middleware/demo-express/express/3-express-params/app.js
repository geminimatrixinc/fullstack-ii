var express = require('express');
var morgan = require('morgan');

var app = express();


// Middleware to handle JSON and URL-encoded payloads
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Using extended: true for complex objects
app.use(morgan('combined'))


// POST request handler for '/payload'
app.post('/payload', (req, res) => {
    console.log(`body: ${JSON.stringify(req.body)}`);
    res.send(JSON.stringify(req.body));
});

// GET request for '/'
app.get('/', (req, res) => {
    res.send('Hello from the server!!');
});

// GET request for '/person'
app.get('/person', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
            <head><title>Person Page</title></head>
            <body>
                <h1>Hello World!</h1>
            </body>
        </html>
    `);
});

// GET request for dynamic route '/person/:personId/books/:bookId'
app.get('/person/:personId/books/:bookId', (req, res) => {
    const { personId, bookId } = req.params;

    console.log(req.params);
   // console.log(req.originalUrl);

    res.send(`
        <!DOCTYPE html>
        <html>
            <head><title>Person and Book</title></head>
            <body>
                <h1>Person ID: ${personId}</h1>
                <h1>Book ID: ${bookId}</h1>
            </body>
        </html>
    `);
});

// Set port with fallback to 3005
var port = process.env.PORT || 3005;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
