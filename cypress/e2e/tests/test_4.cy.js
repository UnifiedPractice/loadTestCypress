
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=229c1856-dd45-4aa6-a084-d78c2695f25f&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=229c1856-dd45-4aa6-a084-d78c2695f25f&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      