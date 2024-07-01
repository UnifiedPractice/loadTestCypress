
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=49541384-2269-4354-9d04-90c566d263fe&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=49541384-2269-4354-9d04-90c566d263fe&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      