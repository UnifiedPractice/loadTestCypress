
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=8c9fb694-f72a-4a35-a14e-53ce85f152ba&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=8c9fb694-f72a-4a35-a14e-53ce85f152ba&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      