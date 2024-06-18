
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=4e7b2fa5-bb07-42f9-87c4-fbb77e5633e2&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=4e7b2fa5-bb07-42f9-87c4-fbb77e5633e2&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            // Adaugă alte aserțiuni specifice testului, dacă este cazul
            // cy.contains('Dashboard').should('be.visible');
          });
        });
      