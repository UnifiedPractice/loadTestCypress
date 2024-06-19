
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=5fb1e0f4-a621-4096-b72e-e3c32535f78f&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=5fb1e0f4-a621-4096-b72e-e3c32535f78f&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      