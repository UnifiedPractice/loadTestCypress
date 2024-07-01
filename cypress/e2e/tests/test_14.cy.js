
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=e367b912-1244-4293-83e3-38ab2d70c635&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=e367b912-1244-4293-83e3-38ab2d70c635&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      