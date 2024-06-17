const fs = require('fs');
const csv = require('csv-parser');

const csvFilePath = 'cypress/fixtures/links.csv'; // Actualizează calea completă către fișierul links.csv

let numTests = 0;

fs.createReadStream(csvFilePath)
    .pipe(csv())
    .on('data', (row) => {
        numTests++;
    })
    .on('end', () => {
        console.log(`Număr de teste necesare: ${numTests}`);
    })
    .on('error', (err) => {
        console.error('Eroare la citirea fișierului CSV:', err);
    });
