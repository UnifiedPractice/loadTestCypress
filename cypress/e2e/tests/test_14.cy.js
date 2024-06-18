
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=d6cfaf9e-2b11-45f0-aaa0-1cab1838dfa1&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=d6cfaf9e-2b11-45f0-aaa0-1cab1838dfa1&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      