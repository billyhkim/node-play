const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => {
  return "Your notes...";
}

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return []
  }
}

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => note.title === title);

  if (!duplicateNote) {
    notes.push({
      title, 
      body
    });
    saveNotes(notes);
    console.log('New noted added :)');
  } else {
    console.log('Note title already taken!');
  }
}

const removeNote = (title) => {
  const notes = loadNotes();
  const filteredNotes = notes.filter(note => note.title !== title);

  if (notes.length !== filteredNotes.length) {
    saveNotes(filteredNotes);
    console.log(chalk.bold.inverse.green(`${title} has been removed!`));
  } else {
    console.log(chalk.bold.inverse.red(`No notes removed! Invalid title`));
  }
}

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
}

const listNotes = () => {
  const notes = loadNotes();

  console.log(chalk.blue.bold.inverse('Your notes:'));
  notes.forEach(note => {
    console.log(chalk.bold.red(`Title: ${note.title}`));
    console.log(chalk.bold.magenta(`Desc.: ${note.body}`));
  });
}

module.exports = {
  getNotes,
  addNote,
  removeNote,
  listNotes
};