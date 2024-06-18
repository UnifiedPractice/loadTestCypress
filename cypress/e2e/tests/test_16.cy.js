
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=7dcd9317-bb85-4a3a-815d-fd81853842b4&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=7dcd9317-bb85-4a3a-815d-fd81853842b4&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      