
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=08f054db-0331-4901-ade1-23ca2ab5443d&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=08f054db-0331-4901-ade1-23ca2ab5443d&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      