// local module
const { log } = require('console');
const {a, add}= require('./local_1')
// name elias
const {a: a2, add: add2}= require('./local_2')
console.log(add2(2,3,7));

// built in module

const path = require("path")
console.log(path.join("/C:/typscript-project/learning-node/", "local_1.js"));
