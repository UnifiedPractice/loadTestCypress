
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=8dc08f96-8d0d-44b5-bf1f-398e17ecc9be&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=8dc08f96-8d0d-44b5-bf1f-398e17ecc9be&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Sign in to Unified Practice').should('be.visible');

          });
        });
      