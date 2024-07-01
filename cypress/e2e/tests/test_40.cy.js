
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=58e74ee5-e3f9-4c5e-b8ea-d6ada4d9d4fd&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=58e74ee5-e3f9-4c5e-b8ea-d6ada4d9d4fd&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      