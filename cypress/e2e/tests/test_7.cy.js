
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=34b99dbd-12e8-463d-b029-88fb6ed39252&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=34b99dbd-12e8-463d-b029-88fb6ed39252&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Sign in to Unified Practice').should('be.visible');

          });
        });
      