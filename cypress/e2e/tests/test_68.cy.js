
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=5089b70e-f447-4971-9e3f-8f3ba54ae0e4&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=5089b70e-f447-4971-9e3f-8f3ba54ae0e4&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      