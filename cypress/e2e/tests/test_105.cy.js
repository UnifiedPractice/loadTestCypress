
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=12a3079b-9990-4129-a199-fc13b67d6a95&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=12a3079b-9990-4129-a199-fc13b67d6a95&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      