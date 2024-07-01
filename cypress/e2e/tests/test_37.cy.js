
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=c04581cf-87f1-4a77-9206-0ca4cdd1f2b6&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=c04581cf-87f1-4a77-9206-0ca4cdd1f2b6&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Dashboard').should('be.visible');
          });
        });
      