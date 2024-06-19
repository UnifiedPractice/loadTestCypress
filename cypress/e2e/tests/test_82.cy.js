
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=3e4112a5-d9de-4b73-98e8-70ca4b2252c2&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=3e4112a5-d9de-4b73-98e8-70ca4b2252c2&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      