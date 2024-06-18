const fs = require('fs');
const path = require('path');
const csvParser = require('csv-parser');

// Calea către directorul unde vor fi create fișierele de test
const testsFolder = path.join('cypress/e2e/tests');
// Calea către fișierul CSV cu linkuri
const csvFilePath = path.join('cypress/fixtures/links.csv');

// Asigură-te că directorul pentru teste există
if (!fs.existsSync(testsFolder)) {
    fs.mkdirSync(testsFolder, { recursive: true });
}

// Citirea fișierului CSV și generarea testelor pentru fiecare link
let index = 0;
fs.createReadStream(csvFilePath)
    .pipe(csvParser({ headers: false }))
    .on('data', (row) => {
        const link = row[0]; // Prima coloană din CSV

        if (link) {
            const testContent = `
        describe('Test for Link: ${link}', () => {
          it('Visits the link and checks login', () => {
            cy.visit('${link}');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            // Adaugă alte aserțiuni specifice testului, dacă este cazul
            // cy.contains('Dashboard').should('be.visible');
          });
        });
      `;

            const testFileName = `test_${index}.js`;
            const testFilePath = path.join(testsFolder, testFileName);

            fs.writeFileSync(testFilePath, testContent);
            console.log(`Fișierul de test a fost creat: ${testFileName}`);
            index++;
        }
    })
    .on('end', () => {
        console.log('Toate teste create cu succes.');
    })
    .on('error', (err) => {
        console.error('Eroare la citirea fișierului CSV:', err);
        process.exit(1);
    });
