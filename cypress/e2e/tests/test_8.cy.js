
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=0a49bde9-53af-4287-85f8-70aac135b0ee&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=0a49bde9-53af-4287-85f8-70aac135b0ee&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Sign in to Unified Practice').should('be.visible');

          });
        });
      