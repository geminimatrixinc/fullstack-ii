const express = require('express');
const logger = require('morgan');
const chalk = require('chalk');
const cors = require('cors');

const app = express();

app.use(cors());

// Set CORS access and allow headers
// app.all('*', (req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
//     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
//     next();
// });

// Define routes and router
const blocksRouter = require('./routes/blocksRoutes');

// Setup middleware
app.use(logger((tokens, req, res) => {
    return [
        chalk.blue(tokens.method(req, res)),
        chalk.green(tokens.url(req, res)),
        chalk.yellow(tokens.status(req, res)),
        chalk.magenta(tokens.res(req, res, 'content-length')), 'bytes',
        chalk.cyan(tokens['response-time'](req, res)), 'ms',
        chalk.gray(req.rawBody ? JSON.stringify(req.rawBody) : '')
    ].join(' ');
}));

app.use(express.json({
    verify: (req, res, buf) => {
        req.rawBody = buf.toString();
    }
}));

// Setup Express Routes
app.use('/blocks', blocksRouter);

const PORT = 5001;

app.listen(PORT, () => {
    console.log(`CORS-enabled web server listening on port ${PORT}`);
});
