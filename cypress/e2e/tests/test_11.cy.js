
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=9857b5cb-ee9a-4a81-8f65-9ee2db11d68d&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=9857b5cb-ee9a-4a81-8f65-9ee2db11d68d&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            // Adaugă alte aserțiuni specifice testului, dacă este cazul
            // cy.contains('Dashboard').should('be.visible');
          });
        });
      