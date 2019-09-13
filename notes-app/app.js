/*
// First node script
const fs = require('fs');
fs.writeFileSync('notes.txt', 'I AM GROOT');
fs.appendFileSync('notes.txt', '  STARLORD!');

// require from module.export in utils.js
const add = require('./utils');
const sum = add(4, 3);
console.log(sum);

// validator
const validator = require('validator');

console.log('Email is valid: ', validator.isEmail('billy@example.com'));
console.log('URL is valid: ', validator.isURL('www.example.com'));

// using the module.exports function from notes.js
const notes = getNotes();
console.log(notes);
*/

const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes');

console.log(process.argv);
console.log(yargs.argv);