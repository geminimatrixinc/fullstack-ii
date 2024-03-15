
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const customEmitter = new MyEmitter();

// named event, string, casing matters!

// event listener, must be triggered for callback to run
customEmitter.on('customEvent', () => {
    console.log(`Custom event was emitted!`)
})

module.exports = customEmitter;