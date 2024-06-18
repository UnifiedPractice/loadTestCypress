
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=b4ad9b6c-40b8-4b07-92ca-bc2b2d206c2f&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=b4ad9b6c-40b8-4b07-92ca-bc2b2d206c2f&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Sign in to Unified Practice').should('be.visible');

          });
        });
      