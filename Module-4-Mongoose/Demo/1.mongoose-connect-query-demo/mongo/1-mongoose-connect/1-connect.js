
var mongoose = require('mongoose');

const connectionString ="mongodb://localhost:27017/busy-qa-oct-2024";

mongoose.connect(connectionString)
.then(
       () => console.log("mongoose started...")
  );







  const dbConnection = mongoose.connection;

  // event listeners...
  dbConnection.on('open', () => {
    console.log(`mongoose connection open`)
  })
    dbConnection.on('close', () => {
        console.log(`mongoose connection closed`)
    })

    dbConnection.on('err', () => {
        console.log(`mongoose connection error`)
    })



const handleDisconnect = () => {
    mongoose.disconnect((err) => console.log(`disconnecting..`))
}
  setTimeout(handleDisconnect, 5000)
   ///asdfsdf