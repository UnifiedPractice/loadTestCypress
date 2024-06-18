
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=c12271ae-e544-4c9d-ae6e-700eb74e8035&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=c12271ae-e544-4c9d-ae6e-700eb74e8035&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            // Adaugă alte aserțiuni specifice testului, dacă este cazul
            // cy.contains('Dashboard').should('be.visible');
          });
        });
      