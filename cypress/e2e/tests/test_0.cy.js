
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=960e9447-c97a-41d5-8263-8844636c88da&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=960e9447-c97a-41d5-8263-8844636c88da&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      