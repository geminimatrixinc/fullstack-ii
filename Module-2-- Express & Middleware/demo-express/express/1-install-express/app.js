
var express = require('express');
// instance of express server
var app = express();
 
// server listen ===> start
app.listen(3000, () => {
    console.log(`server connected on port 3000..`)
});