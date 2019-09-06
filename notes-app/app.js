const fs = require('fs');

fs.writeFileSync('notes.txt', 'I AM GROOT');

fs.appendFileSync('notes.txt', '  STARLORD!');