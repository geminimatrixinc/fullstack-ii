// 1. 3rd party node modules (npm)
//const chalk = require('chalk');

// 2. built-in node module

const fs = require('fs');

// 3. custom module 
const myModule = require('./myModule');
const mathModule = require('./math');

const customEmitter = require('./emitter');

// emit (trigger) the custom event
customEmitter.emit('customEvent');

// recap use custom module
const result = mathModule.square(5);
console.log(`Square of 5 is ${result}`)