
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=44b27c8b-f346-46a3-8b89-732238b70ab2&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=44b27c8b-f346-46a3-8b89-732238b70ab2&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      