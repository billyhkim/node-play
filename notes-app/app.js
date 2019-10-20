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
const notes = require('./notes');

// customize yargs version
yargs.version('1.1.0');

// create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string'
    }
  },
  handler: argv => notes.addNote(argv.title, argv.body)
})

// create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler: argv => notes.removeNote(argv.title)
})

// create list command
yargs.command({
  command: 'list',
  describe: 'List notes',
  handler: () => notes.listNotes()
})

// create read command
yargs.command({
  command: 'read',
  describe: 'Read a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler: argv => notes.readNote(argv.title)
})

yargs.parse();
// console.log(yargs.argv);