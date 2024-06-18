
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=3e48da22-996d-4446-8d44-294b9125eaba&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=3e48da22-996d-4446-8d44-294b9125eaba&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Sign in to Unified Practice').should('be.visible');

          });
        });
      