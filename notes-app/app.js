/*
// First node script
const fs = require('fs');
fs.writeFileSync('notes.txt', 'I AM GROOT');
fs.appendFileSync('notes.txt', '  STARLORD!');

// require from module.export in utils.js
const add = require('./utils');
const sum = add(4, 3);
console.log(sum);
*/

const validator = require('validator');
const getNotes = require('./notes');

const notes = getNotes();
console.log(notes);

console.log('Email is valid: ', validator.isEmail('billy@example.com'));
console.log('URL is valid: ', validator.isURL('www.example.com'));