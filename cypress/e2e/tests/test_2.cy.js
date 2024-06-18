
        describe('Test for Link: https://staging.unifiedpractice.com/Public/Account/Login?token=b744d226-d7f9-48ec-af12-e1806edc4392&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true', () => {
          it('Visits the link and checks login', () => {
            cy.visit('https://staging.unifiedpractice.com/Public/Account/Login?token=b744d226-d7f9-48ec-af12-e1806edc4392&ignoreTokenExpiryDate=true&redirectToMetabaseDashboard=true');
            cy.get('#login-window-form').type('impersonate');
            cy.contains('Login').click();
            cy.contains('Sign in to Unified Practice').should('be.visible');

          });
        });
      