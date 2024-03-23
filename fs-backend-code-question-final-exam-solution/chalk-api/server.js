const express = require('express');
const path = require('path');
const progress = require('./modules/progressModule');

const app = express();

// Middleware
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')));

// Issue #1 ==> routes need to be defined before express server starts
// Issue #2 ==> update verbs from GET to POST
// Issue #3 ==> incorrect routes path, need to add prefix '/progress'
app.post('/progress/start', (req, res) => {
    console.log(`progress: start request received`);
    progress.startProgress();
    res.send(`start received: server`);
})

app.post('/progress/stop', (req, res) => {
    console.log(`progress: stop request received`);
    progress.stopProgress();
    res.send(`stop received: server`);
})

const PORT = 5005;

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});