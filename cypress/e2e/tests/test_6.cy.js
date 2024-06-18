
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=ec3af6b0-d161-4d1a-8bfa-4bba2ce096ed&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=ec3af6b0-d161-4d1a-8bfa-4bba2ce096ed&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            // Adaugă alte aserțiuni specifice testului, dacă este cazul
            // cy.contains('Dashboard').should('be.visible');
          });
        });
      