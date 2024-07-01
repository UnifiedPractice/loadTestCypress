
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=78d41824-6510-4a37-90ef-64a6d35c7645&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=78d41824-6510-4a37-90ef-64a6d35c7645&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      