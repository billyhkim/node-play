const fs = require('fs');

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
  const duplicateNotes = notes.filter(notes => {
    return notes.title === title
  })

  if (duplicateNotes.length === 0) {
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

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
}

module.exports = {
  getNotes,
  addNote
};