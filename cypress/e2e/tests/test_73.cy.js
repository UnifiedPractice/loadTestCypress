
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=6f85f581-1d6e-4328-a4d9-88932c8d3b7a&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=6f85f581-1d6e-4328-a4d9-88932c8d3b7a&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      