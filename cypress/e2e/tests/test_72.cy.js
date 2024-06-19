
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=04631846-116d-4d71-b749-f9e58fddc003&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=04631846-116d-4d71-b749-f9e58fddc003&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      