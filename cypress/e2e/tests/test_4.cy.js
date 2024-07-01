
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=04968f2c-bfc4-4de4-adad-d917f3e2d56b&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=04968f2c-bfc4-4de4-adad-d917f3e2d56b&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      