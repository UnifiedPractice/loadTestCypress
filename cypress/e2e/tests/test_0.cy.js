
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=9f768887-6532-4b1c-acfc-2b7954d99f81&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=9f768887-6532-4b1c-acfc-2b7954d99f81&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            // Adaugă alte aserțiuni specifice testului, dacă este cazul
            // cy.contains('Dashboard').should('be.visible');
          });
        });
      