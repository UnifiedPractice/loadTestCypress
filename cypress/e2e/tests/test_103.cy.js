
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=7d60e737-478c-4ffe-ad8e-2d4a3cdf8699&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=7d60e737-478c-4ffe-ad8e-2d4a3cdf8699&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      