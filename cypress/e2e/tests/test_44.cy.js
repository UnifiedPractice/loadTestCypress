
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=c54eca21-dfa6-4e2f-9be7-e15574da3f16&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=c54eca21-dfa6-4e2f-9be7-e15574da3f16&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      