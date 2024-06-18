const Papa = require('papaparse');

describe('Test Links from CSV', () => {
  it('Visits each link and checks login', () => {
    cy.task('readCsvFile').then(csvData => {
      const parsedData = Papa.parse(csvData, { header: false });

      // Verifică dacă datele au fost parseate corect
      cy.log('Parsed Data:', JSON.stringify(parsedData.data));

      parsedData.data.forEach(row => {
        const link = row[0];

        if (link) {
          cy.log(`Visiting: ${link}`);
          cy.visit(link);

          cy.get('#login-window-form').type('impersonate');
          cy.contains('Login').click();

          cy.contains('Sign in to Unified Practice').should('be.visible');
        }
      });
    });
  });
});
