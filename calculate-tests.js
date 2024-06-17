const fs = require('fs');
const csv = require('csv-parser');

const csvFilePath = 'fixtures/links.csv'; // Actualizează calea relativă către fișierul links.csv

let numTests = 0;

fs.createReadStream(csvFilePath)
  .pipe(csv())
  .on('data', (row) => {
    numTests++;
  })
  .on('end', () => {
    console.log(numTests); // Returnează doar numărul de teste necesare
  })
  .on('error', (err) => {
    console.error('Eroare la citirea fișierului CSV:', err);
    process.exit(1); // Ieși cu cod de eroare în caz de eroare
  });
