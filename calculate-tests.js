const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

const csvFilePath = path.resolve(__dirname, 'fixtures/links.csv'); // Cale absolută către fișierul links.csv

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
