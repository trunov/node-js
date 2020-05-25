const note = require('./notes.js');
const chalk = require('chalk');
const msg = note();

console.log(msg);

console.log(chalk.green.bold.inverse('Success!'))