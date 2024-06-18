
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=0adea8b7-5edb-4cdd-ab17-6b057b2e74b5&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=0adea8b7-5edb-4cdd-ab17-6b057b2e74b5&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      